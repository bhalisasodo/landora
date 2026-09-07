import fs from "fs";
import path from "path";

const artifactDir = "C:\\Users\\bhali\\.gemini\\antigravity-cli\\brain\\af0b8f8b-aa01-4b18-b75d-d6d142c8834e";
const publicDemos = path.join(process.cwd(), "public", "demos");

const barberSrc = path.join(artifactDir, "barber_studio_demo_1787686775054.jpg");
const physioSrc = path.join(artifactDir, "physio_recovery_demo_1787686802725.jpg");

if (fs.existsSync(barberSrc)) {
  fs.copyFileSync(barberSrc, path.join(publicDemos, "barber.jpg"));
  console.log("Deployed barber.jpg to public/demos/barber.jpg");
}

if (fs.existsSync(physioSrc)) {
  fs.copyFileSync(physioSrc, path.join(publicDemos, "physio.jpg"));
  console.log("Deployed physio.jpg to public/demos/physio.jpg");
}
