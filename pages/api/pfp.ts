import type { NextApiRequest, NextApiResponse } from "next";
import * as Minio from "minio";
import formidable from "formidable";
import fs from "fs/promises";
import sharp from "sharp";

const minio = new Minio.Client({
    endPoint: process.env.S3_ENDPOINT ?? "",
    port: 443,
    useSSL: true,
    accessKey: process.env.S3_ACCESS_KEY ?? "",
    secretKey: process.env.S3_SECRET_KEY ?? "",
    region: "auto",
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const form = formidable();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Error parsing form data:", err);
            return res.status(500).json({ error: "Error parsing form data" });
        }

        const uid = req.query.id || "";
        const file = files.file?.[0];

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
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
                return res.status(400).json({ error: "Invalid image file" });
            }

            const s3Bucket = process.env.S3_BUCKET;
            if (!s3Bucket) {
                throw new Error(
                    "S3_BUCKET environment variable is not defined",
                );
            }

            const s3URL = await minio.putObject(
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

            const BasicAuth = Buffer.from(`${authID}:${authSecret}`).toString(
                "base64",
            );

            const LogtoResponse = await fetch(
                "https://account.mikn.dev/oidc/token",
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
                throw new Error(
                    `Failed to get Logto token: ${LogtoResponse.statusText}`,
                );
            }

            const data = await LogtoResponse.json();
            const token = data.access_token;

            const LogtoAvatarResponse = await fetch(
                `https://account.mikn.dev/api/users/${uid}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        avatar: FQURL,
                    }),
                },
            );

            if (LogtoAvatarResponse.ok) {
                res.status(200).json({
                    url: FQURL,
                    sessionShouldBeRefreshed: true,
                });
            } else {
                const errorText = await LogtoAvatarResponse.text();
                console.error("Error updating Logto avatar:", errorText);
                res.status(500).json({
                    error: "Error updating avatar in Logto",
                });
            }
        } catch (error) {
            console.error("Error processing or uploading file:", error);
            res.status(500).json({
                error: "Error processing or uploading file",
            });
        } finally {
            // Clean up the temporary file
            if (file.filepath) {
                fs.unlink(file.filepath).catch(console.error);
            }
        }
    });
}
