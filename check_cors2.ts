import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";
import fs from "fs";

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
        fs.writeFileSync("cors-result.json", JSON.stringify(response.CORSRules, null, 2));
        console.log("Success");
    } catch (error) {
        fs.writeFileSync("cors-error.json", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        console.error("Error written to cors-error.json");
    }
}

main();
