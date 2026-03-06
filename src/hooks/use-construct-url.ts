import { env } from "@/lib/env";

export function useConstructUrl(key: string) {
  if (!key) return "";

  // If the key is already an absolute URL (e.g. from Unsplash), return it as-is
  if (key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }

  return `https://${env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
}
