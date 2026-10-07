import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const ogImagePath = path.join(publicDir, "og-image.jpg");

if (!fs.existsSync(ogImagePath)) {
  throw new Error("Missing Landora social preview asset: public/og-image.jpg");
}

console.log(`Landora social preview is available at ${ogImagePath}`);
