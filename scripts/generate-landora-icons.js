const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateAssets() {
  const rootDir = path.join(__dirname, "..");
  const pubDir = path.join(rootDir, "public");

  const lightSourcePath = path.join(rootDir, "landora-icon-lightbackground.png");
  const darkSourcePath = path.join(rootDir, "landora-icon-darkbackground.png");

  console.log("Reading source assets...");

  // 1. Copy source files to public directory for direct access
  fs.copyFileSync(lightSourcePath, path.join(pubDir, "landora-icon-lightbackground.png"));
  fs.copyFileSync(darkSourcePath, path.join(pubDir, "landora-icon-darkbackground.png"));
  console.log("Copied raw sources to public/");

  // 2. Extract Squircle Badges
  // Dark squircle bounds: approx 400..854 -> 454x454
  const darkRaw = await sharp(darkSourcePath).raw().toBuffer({ resolveWithObject: true });
  const W = darkRaw.info.width, H = darkRaw.info.height;
  const dData = darkRaw.data;

  let dMinX = W, dMaxX = 0, dMinY = H, dMaxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 4;
      if (dData[idx + 3] > 30) {
        if (x < dMinX) dMinX = x;
        if (x > dMaxX) dMaxX = x;
        if (y < dMinY) dMinY = y;
        if (y > dMaxY) dMaxY = y;
      }
    }
  }

  // Square bounding box centered on squircle
  const dSize = Math.max(dMaxX - dMinX, dMaxY - dMinY);
  const dCenterX = Math.floor((dMinX + dMaxX) / 2);
  const dCenterY = Math.floor((dMinY + dMaxY) / 2);
  const dCropLeft = Math.max(0, dCenterX - Math.floor(dSize / 2));
  const dCropTop = Math.max(0, dCenterY - Math.floor(dSize / 2));

  console.log("Dark squircle crop box:", { dCropLeft, dCropTop, dSize });

  // Generate public/landora-icon-dark.png (512x512)
  await sharp(darkSourcePath)
    .extract({ left: dCropLeft, top: dCropTop, width: dSize, height: dSize })
    .resize(512, 512)
    .png()
    .toFile(path.join(pubDir, "landora-icon-dark.png"));
  console.log("Created public/landora-icon-dark.png");

  // App icons and Favicons from dark squircle
  await sharp(path.join(pubDir, "landora-icon-dark.png"))
    .resize(512, 512)
    .toFile(path.join(pubDir, "icon.png"));
  console.log("Created public/icon.png");

  await sharp(path.join(pubDir, "landora-icon-dark.png"))
    .resize(180, 180)
    .toFile(path.join(pubDir, "apple-icon.png"));
  console.log("Created public/apple-icon.png");

  await sharp(path.join(pubDir, "landora-icon-dark.png"))
    .resize(180, 180)
    .toFile(path.join(pubDir, "apple-touch-icon.png"));
  console.log("Created public/apple-touch-icon.png");

  await sharp(path.join(pubDir, "landora-icon-dark.png"))
    .resize(32, 32)
    .toFile(path.join(pubDir, "favicon.ico"));
  console.log("Created public/favicon.ico");

  // 3. Light squircle badge
  const lightRaw = await sharp(lightSourcePath).raw().toBuffer({ resolveWithObject: true });
  const lData = lightRaw.data;

  // Find light squircle bounds
  let lMinX = W, lMaxX = 0, lMinY = H, lMaxY = 0;
  for (let y = 100; y < H - 100; y++) {
    for (let x = 100; x < W - 100; x++) {
      const idx = (y * W + x) * 3;
      const r = lData[idx], g = lData[idx+1], b = lData[idx+2];
      if (r < 244 && g < 238) {
        if (x < lMinX) lMinX = x;
        if (x > lMaxX) lMaxX = x;
        if (y < lMinY) lMinY = y;
        if (y > lMaxY) lMaxY = y;
      }
    }
  }
  const lSize = Math.max(lMaxX - lMinX, lMaxY - lMinY);
  const lCenterX = Math.floor((lMinX + lMaxX) / 2);
  const lCenterY = Math.floor((lMinY + lMaxY) / 2);
  const lCropLeft = Math.max(0, lCenterX - Math.floor(lSize / 2));
  const lCropTop = Math.max(0, lCenterY - Math.floor(lSize / 2));

  await sharp(lightSourcePath)
    .extract({ left: lCropLeft, top: lCropTop, width: lSize, height: lSize })
    .resize(512, 512)
    .png()
    .toFile(path.join(pubDir, "landora-icon-light.png"));
  console.log("Created public/landora-icon-light.png");

  // 4. Extract High-Resolution Isolated Transparent Mark
  // Light mark (Ink loop + green dot, transparent background)
  // Mark bounding box in light image: 484 to 783 (width 300), 493 to 754 (height 261)
  const markCenterX = Math.floor((484 + 783) / 2);
  const markCenterY = Math.floor((493 + 754) / 2);
  const markBoxSize = 340;
  const mLeft = markCenterX - Math.floor(markBoxSize / 2);
  const mTop = markCenterY - Math.floor(markBoxSize / 2);

  // Extract from light image:
  const lightMarkBuf = Buffer.alloc(markBoxSize * markBoxSize * 4);
  for (let y = 0; y < markBoxSize; y++) {
    for (let x = 0; x < markBoxSize; x++) {
      const srcIdx = ((mTop + y) * W + (mLeft + x)) * 3;
      const r = lData[srcIdx], g = lData[srcIdx+1], b = lData[srcIdx+2];
      const destIdx = (y * markBoxSize + x) * 4;

      // Cream background is approx [242, 235, 221]
      const bgDiff = Math.max(0, 242 - r, 235 - g, 221 - b);
      let alpha = Math.min(255, Math.max(0, Math.round(bgDiff * 1.8)));
      if (alpha < 18) alpha = 0;

      lightMarkBuf[destIdx] = r;
      lightMarkBuf[destIdx+1] = g;
      lightMarkBuf[destIdx+2] = b;
      lightMarkBuf[destIdx+3] = alpha;
    }
  }

  // Save transparent light mark PNG (512x512)
  await sharp(lightMarkBuf, { raw: { width: markBoxSize, height: markBoxSize, channels: 4 } })
    .resize(512, 512)
    .png()
    .toFile(path.join(pubDir, "landora-mark.png"));
  console.log("Created public/landora-mark.png");

  // Reversed/Dark mark (Cream loop + green dot, transparent background)
  const darkMarkBuf = Buffer.alloc(markBoxSize * markBoxSize * 4);
  for (let y = 0; y < markBoxSize; y++) {
    for (let x = 0; x < markBoxSize; x++) {
      const srcIdx = ((mTop + y) * W + (mLeft + x)) * 4;
      const r = dData[srcIdx], g = dData[srcIdx+1], b = dData[srcIdx+2], a = dData[srcIdx+3];
      const destIdx = (y * markBoxSize + x) * 4;

      const isGreen = (g > 70 && g - r > 20);
      const isCream = (r > 60 && g > 60 && Math.abs(r - g) < 25);
      
      let alpha = 0;
      if (a > 30) {
        if (isGreen) {
          alpha = Math.min(255, Math.max(0, Math.round((g - 26) * 2.8)));
        } else if (isCream) {
          alpha = Math.min(255, Math.max(0, Math.round((r - 26) * 1.5)));
        }
      }
      if (alpha < 18) alpha = 0;

      darkMarkBuf[destIdx] = r;
      darkMarkBuf[destIdx+1] = g;
      darkMarkBuf[destIdx+2] = b;
      darkMarkBuf[destIdx+3] = alpha;
    }
  }

  await sharp(darkMarkBuf, { raw: { width: markBoxSize, height: markBoxSize, channels: 4 } })
    .resize(512, 512)
    .png()
    .toFile(path.join(pubDir, "landora-mark-reversed.png"));
  console.log("Created public/landora-mark-reversed.png");

  // 5. High-fidelity SVGs wrapping the exact crisp mark
  const lightMarkBase64 = fs.readFileSync(path.join(pubDir, "landora-mark.png")).toString("base64");
  const darkMarkBase64 = fs.readFileSync(path.join(pubDir, "landora-mark-reversed.png")).toString("base64");

  const lightSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image width="512" height="512" href="data:image/png;base64,${lightMarkBase64}"/>
</svg>`;
  fs.writeFileSync(path.join(pubDir, "landora-mark.svg"), lightSvg);
  console.log("Created public/landora-mark.svg");

  const darkSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image width="512" height="512" href="data:image/png;base64,${darkMarkBase64}"/>
</svg>`;
  fs.writeFileSync(path.join(pubDir, "landora-mark-reversed.svg"), darkSvg);
  console.log("Created public/landora-mark-reversed.svg");

  console.log("All Landora assets generated successfully!");
}

generateAssets().catch(console.error);
