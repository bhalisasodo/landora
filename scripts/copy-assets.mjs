import fs from "fs";
import path from "path";

const root = process.cwd();
const brandAssets = path.join(root, "launchgremlin-brand-assets");
const pub = path.join(root, "public");

// Copy favicon.ico
if (fs.existsSync(path.join(brandAssets, "favicon.ico"))) {
  fs.copyFileSync(path.join(brandAssets, "favicon.ico"), path.join(pub, "favicon.ico"));
  console.log("Copied favicon.ico");
}

// Copy icons
const iconsDir = path.join(brandAssets, "icons");
if (fs.existsSync(iconsDir)) {
  const files = fs.readdirSync(iconsDir);
  for (const f of files) {
    fs.copyFileSync(path.join(iconsDir, f), path.join(pub, f));
    console.log(`Copied icon: ${f}`);
  }
}

// Copy svgs
const svgDir = path.join(brandAssets, "svg");
if (fs.existsSync(svgDir)) {
  const files = fs.readdirSync(svgDir);
  for (const f of files) {
    fs.copyFileSync(path.join(svgDir, f), path.join(pub, f));
    console.log(`Copied svg: ${f}`);
  }
}
