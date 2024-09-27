import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import * as Minio from "minio";
import { type File, IncomingForm } from "formidable";
import { promises as fs } from "node:fs";
import sharp from "sharp";
import crypto from "node:crypto";

const minio = new Minio.Client({
    endPoint: "fly.storage.tigris.dev",
    port: 443,
    useSSL: true,
    accessKey: process.env.S3_ACCESS_KEY ?? "",
    secretKey: process.env.S3_SECRET_KEY ?? "",
    region: "auto",
});

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const form = new IncomingForm();
    const { fields, files } = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
        form.parse(req as any, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });

    const uid = req.nextUrl.searchParams.get("id") || "";
    const file = files.file?.[0] as File;
    const name = fields.name?.[0] || "";

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const filetype = file.mimetype?.split("/")[1] || "";
    const randBytes = crypto.randomUUID().replace(/-/g, "");
    const fileName = `avatars/${randBytes}.${filetype}`;
    const contentType = file.mimetype;

    try {
        const fileContent = await fs.readFile(file.filepath);

        // Process the image
        let processedImage;
        try {
            const image = sharp(fileContent);
            const metadata = await image.metadata();

            if (metadata.width !== metadata.height) {
                // Image is not square, make it square
                const size = Math.min(metadata.width!, metadata.height!);
                processedImage = await image
                    .resize(size, size, { fit: "cover" })
                    .toBuffer();
            } else {
                processedImage = fileContent;
            }
        } catch (imageError) {
            console.error("Error processing image:", imageError);
            return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
        }

        const s3Bucket = process.env.S3_BUCKET;
        if (!s3Bucket) {
            throw new Error("S3_BUCKET environment variable is not defined");
        }

        await minio.putObject(
            s3Bucket,
            fileName,
            processedImage,
            processedImage.length,
            { "Content-Type": contentType },
        );

        const FQURL = `https://cdn.mdusercontent.com/${fileName}`;

        const authID = process.env.LOGTO_M2M_ID;
        const authSecret = process.env.LOGTO_M2M_SECRET;

        if (!authID || !authSecret) {
            throw new Error("Logto credentials are not defined");
        }

        const BasicAuth = Buffer.from(`${authID}:${authSecret}`).toString("base64");

        const LogtoResponse = await fetch(
            "https://auth.mikandev.com/oidc/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${BasicAuth}`,
                },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    scope: "all",
                    resource: "https://default.logto.app/api",
                }),
            },
        );

        if (!LogtoResponse.ok) {
            throw new Error(`Failed to get Logto token: ${LogtoResponse.statusText}`);
        }

        const data = await LogtoResponse.json();
        const token = data.access_token;

        const LogtoAvatarResponse = await fetch(
            `https://auth.mikandev.com/api/users/${uid}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    avatar: FQURL,
                    username: name,
                }),
            },
        );

        if (LogtoAvatarResponse.ok) {
            return NextResponse.json({
                url: FQURL,
                sessionShouldBeRefreshed: true,
            });
        }
            const errorText = await LogtoAvatarResponse.text();
            console.error("Error updating Logto avatar:", errorText);
            return NextResponse.json({ error: "Error updating avatar in Logto" }, { status: 500 });
    } catch (error) {
        console.error("Error processing or uploading file:", error);
        return NextResponse.json({ error: "Error processing or uploading file" }, { status: 500 });
    } finally {
        // Clean up the temporary file
        if (file.filepath) {
            fs.unlink(file.filepath).catch(console.error);
        }
    }
}