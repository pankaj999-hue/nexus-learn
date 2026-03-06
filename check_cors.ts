import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";

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

    try {
        const command = new GetBucketCorsCommand({ Bucket: bucketName });
        const response = await s3.send(command);
        console.log("Current CORS Policy:", JSON.stringify(response.CORSRules, null, 2));
    } catch (error) {
        console.error("❌ Failed to get CORS policy:", error);
    }
}

main();
