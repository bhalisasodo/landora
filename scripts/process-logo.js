const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function run() {
  const inputPath = path.join(__dirname, "..", "logo-main-blk.png");
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Convert white background to transparent alpha
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * 3;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    let alpha = 0;
    if (lum < 240) {
      alpha = Math.round(255 * (1 - lum / 240));
      alpha = Math.max(0, Math.min(255, alpha));
    }

    rgba[dstIdx] = 20;     // #14
    rgba[dstIdx + 1] = 18; // #12
    rgba[dstIdx + 2] = 15; // #0F
    rgba[dstIdx + 3] = alpha;
  }

  const rawOpts = { raw: { width, height, channels: 4 } };

  // 1. Full transparent logo
  await sharp(rgba, rawOpts)
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, "..", "public", "logo-transparent.png"));

  // 2. Full Mascot Character with wrench & rocket (X: 180..840, Y: 160..600)
  // Character bounds: X=219..800 (W=581), Y=189..588 (H=399)
  // Let's extract a clean 660x660 square from the 1024x1024 directly!
  // Center X = 510, Center Y = 388
  // Square 660x660 centered at (510, 388):
  // left = 510 - 330 = 180
  // top = 388 - 330 = 58
  // Note: bottom is 58 + 660 = 718, which would capture text at 629.
  // So extract (left: 180, top: 160, width: 660, height: 440) -> pad top 110, bottom 110 -> 660x660 square!
  const mascotExtracted = await sharp(rgba, rawOpts)
    .extract({ left: 180, top: 160, width: 660, height: 440 })
    .png()
    .toBuffer();

  await sharp(mascotExtracted)
    .extend({
      top: 110,
      bottom: 110,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, "..", "public", "gremlin-mark.png"));

  // App & Apple icon
  await sharp(mascotExtracted)
    .extend({
      top: 110,
      bottom: 110,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, "..", "app", "icon.png"));

  await sharp(mascotExtracted)
    .extend({
      top: 110,
      bottom: 110,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, "..", "app", "apple-icon.png"));

  // 3. Isolated Head Crop (X: 180..760 = 580, Y: 160..450 = 290)
  // Extracted width: 580, height: 290 -> pad top 145, bottom 145 -> 580x580 square
  const headExtracted = await sharp(rgba, rawOpts)
    .extract({ left: 180, top: 160, width: 580, height: 290 })
    .png()
    .toBuffer();

  await sharp(headExtracted)
    .extend({
      top: 145,
      bottom: 145,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(128, 128)
    .png({ compressionLevel: 9 })
    .toFile(path.join(__dirname, "..", "public", "gremlin-head.png"));

  // SVG version embedding transparent PNG
  const markB64 = fs.readFileSync(path.join(__dirname, "..", "public", "gremlin-mark.png")).toString("base64");
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "gremlin-mark.svg"),
    `<svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <image href="data:image/png;base64,${markB64}" width="256" height="256"/>\n</svg>\n`
  );

  console.log("Processed perfectly.");
}

run().catch(console.error);
