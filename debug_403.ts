import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import * as dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config({ path: ".env.local" });

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

async function main() {
    const bucketName = process.env.S3_BUCKET_NAME!;
    const uniqueKey = `test-signature-${uuid()}.txt`;
    const contentType = "text/plain";

    try {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: uniqueKey,
            ContentType: contentType,
            ContentLength: 12,
        });

        const presignedUrl = await getSignedUrl(s3, command, {
            expiresIn: 360,
        });

        console.log("Presigned URL:", presignedUrl.substring(0, 100) + "...");

        console.log("Attempting direct PUT request...");
        const uploadRes = await fetch(presignedUrl, {
            method: "PUT",
            headers: {
                "Content-Type": contentType
            },
            body: "Hello World!"
        });

        console.log("Status:", uploadRes.status);
        if (!uploadRes.ok) {
            console.log("Response XML:");
            console.log(await uploadRes.text());
        } else {
            console.log("✅ Upload successful!");
        }
    } catch (error) {
        console.error("❌ Failed:");
        console.error(error);
    }
}

main();
