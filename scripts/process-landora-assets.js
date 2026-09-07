const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function main() {
  const root = path.join(__dirname, "..");
  const brandImgPath = path.join(root, "landora-brand.png");
  const pubDir = path.join(root, "public");
  const appDir = path.join(root, "app");

  const metadata = await sharp(brandImgPath).metadata();
  console.log("Source dimensions:", metadata.width, "x", metadata.height);

  const W = metadata.width;
  const H = metadata.height;

  // Exact vector SVG for Landora mark (continuous loop symbol + signal green dot)
  // Matching the visual proportions from landora-brand.png
  const markSvgPrecision = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48 18C34 18 26 28 26 44C26 62 38 78 54 78C68 78 78 66 78 48C78 30 66 18 50 18C36 18 28 30 28 46C28 64 42 76 56 76" 
        stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="88" cy="76" r="7" fill="#1F6F4C"/>
</svg>`;

  fs.writeFileSync(path.join(pubDir, "landora-mark.svg"), markSvgPrecision);
  console.log("Written public/landora-mark.svg");

  const markSvgReversed = markSvgPrecision
    .replace('stroke="currentColor"', 'stroke="#F5F1EA"');
  fs.writeFileSync(path.join(pubDir, "landora-mark-reversed.svg"), markSvgReversed);
  console.log("Written public/landora-mark-reversed.svg");

  // Locate the dark square app icon in landora-brand.png
  const rawImage = await sharp(brandImgPath).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = rawImage;
  const channels = info.channels;

  let minX = W, maxX = 0, minY = H, maxY = 0;
  for (let y = Math.floor(H * 0.45); y < Math.floor(H * 0.75); y++) {
    for (let x = Math.floor(W * 0.04); x < Math.floor(W * 0.25); x++) {
      const idx = (y * W + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      if (r < 40 && g < 40 && b < 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log("Found App Icon bounding box:", { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });

  let appIconBuffer;
  if (maxX > minX && maxY > minY) {
    const boxW = maxX - minX;
    const boxH = maxY - minY;
    const side = Math.max(boxW, boxH);
    const extractX = Math.max(0, Math.min(W - side, Math.floor(minX - (side - boxW) / 2)));
    const extractY = Math.max(0, Math.min(H - side, Math.floor(minY - (side - boxH) / 2)));

    appIconBuffer = await sharp(brandImgPath)
      .extract({ left: extractX, top: extractY, width: side, height: side })
      .toBuffer();
  } else {
    const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="115" fill="#1A1A18"/>
      <g transform="translate(116, 116) scale(2.8)">
        <path d="M48 18C34 18 26 28 26 44C26 62 38 78 54 78C68 78 78 66 78 48C78 30 66 18 50 18C36 18 28 30 28 46C28 64 42 76 56 76" 
              stroke="#F5F1EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="88" cy="76" r="7" fill="#1F6F4C"/>
      </g>
    </svg>`;
    appIconBuffer = Buffer.from(iconSvg);
  }

  // Generate app icons
  await sharp(appIconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(pubDir, "icon.png"));
  console.log("Saved public/icon.png (512x512)");

  await sharp(appIconBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(pubDir, "apple-icon.png"));
  console.log("Saved public/apple-icon.png (180x180)");

  await sharp(appIconBuffer)
    .resize(32, 32)
    .toFile(path.join(pubDir, "favicon.ico"));
  console.log("Saved public/favicon.ico");

  // Also create landora-mark.png (transparent)
  const markPng = `<svg width="256" height="256" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 18C34 18 26 28 26 44C26 62 38 78 54 78C68 78 78 66 78 48C78 30 66 18 50 18C36 18 28 30 28 46C28 64 42 76 56 76" 
          stroke="#1A1A18" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="88" cy="76" r="7" fill="#1F6F4C"/>
  </svg>`;
  await sharp(Buffer.from(markPng))
    .png()
    .toFile(path.join(pubDir, "landora-mark.png"));
  console.log("Saved public/landora-mark.png");

  console.log("All Landora assets generated successfully!");
}

main().catch(console.error);
