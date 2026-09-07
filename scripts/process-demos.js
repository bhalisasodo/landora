const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const brainDir = "C:\\Users\\bhali\\.gemini\\antigravity-cli\\brain\\339de8e3-c6f1-4563-98a2-60887933cb01";
const outputDir = path.join(__dirname, "..", "public", "demos");

const demos = [
  {
    src: path.join(brainDir, "spa_demo_photo_1787598787845.jpg"),
    dest: path.join(outputDir, "spa.jpg"),
    label: "Spa & Wellness",
  },
  {
    src: path.join(brainDir, "restaurant_demo_photo_1787598874077.jpg"),
    dest: path.join(outputDir, "restaurant.jpg"),
    label: "Restaurant & Cafe",
  },
  {
    src: path.join(brainDir, "fitness_demo_photo_1787598921747.jpg"),
    dest: path.join(outputDir, "fitness.jpg"),
    label: "Fitness Studio",
  },
];

async function processDemos() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const demo of demos) {
    console.log(`Processing ${demo.label}...`);
    
    // Target 4:5 aspect ratio (1600 x 2000)
    // Using sharp fit: 'cover' (center-cropped) with progressive JPEG optimization
    await sharp(demo.src)
      .resize(1600, 2000, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(demo.dest);

    const stats = fs.statSync(demo.dest);
    console.log(`Saved ${demo.dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log("All demo photography processed successfully!");
}

processDemos().catch(console.error);
