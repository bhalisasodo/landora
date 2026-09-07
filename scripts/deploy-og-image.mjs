import fs from "fs";
import path from "path";

const artifactDir = "C:\\Users\\bhali\\.gemini\\antigravity-cli\\brain\\af0b8f8b-aa01-4b18-b75d-d6d142c8834e";
const publicDir = path.join(process.cwd(), "public");

const ogSrc = path.join(artifactDir, "launchgremlin_og_preview_1787687286253.jpg");

if (fs.existsSync(ogSrc)) {
  fs.copyFileSync(ogSrc, path.join(publicDir, "og-image.jpg"));
  console.log("Deployed og-image.jpg to public/og-image.jpg");
}
