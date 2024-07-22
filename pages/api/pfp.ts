export const runtime = "edge";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextRequest) {
    if (req.method !== "POST") {
        return NextResponse.json(
            { error: "Method not allowed" },
            { status: 405 },
        );
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const uid = req.nextUrl.searchParams.get("id") || "";

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 },
            );
        }

        const fileBuffer = await file.arrayBuffer();
        const filetype = file.type.split("/")[1] || "";
        const randBytes = crypto.randomUUID().replace(/-/g, "");
        const fileName = `avatars/${randBytes}.${filetype}`;

        // Process the image
        const processedImage = await processImage(fileBuffer);

        // Upload to S3-compatible storage
        const FQURL = await uploadToStorage(
            fileName,
            processedImage,
            file.type,
        );

        // Update Logto avatar
        const success = await updateLogtoAvatar(uid, FQURL);

        if (success) {
            return NextResponse.json({
                url: FQURL,
                sessionShouldBeRefreshed: true,
            });
        } else {
            return NextResponse.json(
                { error: "Error updating avatar in Logto" },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Error processing or uploading file:", error);
        return NextResponse.json(
            { error: "Error processing or uploading file" },
            { status: 500 },
        );
    }
}

async function processImage(buffer: ArrayBuffer): Promise<ArrayBuffer> {
    // Note: Sharp is not available in Edge runtime, so we're skipping image processing
    // You may want to use a different image processing library that works in Edge runtime
    // or process images client-side before uploading
    return buffer;
}

async function uploadToStorage(
    fileName: string,
    buffer: ArrayBuffer,
    contentType: string,
): Promise<string> {
    const s3Bucket = process.env.S3_BUCKET;
    if (!s3Bucket) {
        throw new Error("S3_BUCKET environment variable is not defined");
    }

    // Note: Minio SDK is not available in Edge runtime
    // You'll need to use fetch to make direct S3 API calls
    // This is a simplified example and may need additional implementation
    const endpoint = process.env.S3_ENDPOINT;
    const accessKey = process.env.S3_ACCESS_KEY;
    const secretKey = process.env.S3_SECRET_KEY;

    const url = `https://${endpoint}/${s3Bucket}/${fileName}`;
    const date = new Date().toUTCString();
    const stringToSign = `PUT\n\n${contentType}\n${date}\n/${s3Bucket}/${fileName}`;
    const signature = await createHmac(stringToSign, secretKey!);

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": contentType,
            Date: date,
            Authorization: `AWS ${accessKey}:${signature}`,
        },
        body: buffer,
    });

    if (!response.ok) {
        throw new Error(`Failed to upload to S3: ${response.statusText}`);
    }

    return `https://cdn.mdusercontent.com/${fileName}`;
}

async function updateLogtoAvatar(
    uid: string,
    avatarUrl: string,
): Promise<boolean> {
    const authID = process.env.LOGTO_M2M_ID;
    const authSecret = process.env.LOGTO_M2M_SECRET;

    if (!authID || !authSecret) {
        throw new Error("Logto credentials are not defined");
    }

    const BasicAuth = btoa(`${authID}:${authSecret}`);

    const LogtoResponse = await fetch("https://account.mikn.dev/oidc/token", {
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
    });

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
                avatar: avatarUrl,
            }),
        },
    );

    return LogtoAvatarResponse.ok;
}

async function createHmac(message: string, secret: string): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const messageData = encoder.encode(message);

    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-1" },
        false,
        ["sign"],
    );

    const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
}
