import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "projects");
fs.mkdirSync(OUT, { recursive: true });

const shots = [
  { id: "moonera", url: "https://moonera.webstead.ru", file: "moonera.png" },
  { id: "cantexniki", url: "https://cantexniki.ru", file: "cantexniki.png" },
  { id: "doors-russia", url: "https://doors-russia.webstead.ru", file: "doors-russia.png" },
  { id: "poseidon", url: "https://poseidondoors.ru", file: "poseidon-doors.png" },
  { id: "spinny", url: "https://spinny.ru", file: "spinny.png" },
  { id: "abpetrov", url: "https://abpetrov.webstead.ru", file: "abpetrov.png" },
  { id: "goodhouse", url: "https://goodhouse.webstead.ru", file: "goodhouse.png" },
  { id: "paradim", url: "https://paradim.webstead.ru", file: "paradim.png" },
  { id: "st-doors", url: "https://st-doors.webstead.ru/", file: "st-doors.png" },
  { id: "konstanta", url: "https://konstantas.ru", file: "konstanta.png" },
  { id: "lauhtin", url: "https://lauhtin.webstead.ru", file: "lauhtin.png" },
  { id: "velesstroy", url: "https://career.velesstroy.com", file: "velesstroy.png" },
  { id: "interbuilding", url: "https://interbuilding.ru", file: "interbuilding.png" },
  { id: "kuptsov", url: "https://kuptsovwrealty.ru", file: "kuptsov.png" },
  { id: "etrans", url: "https://etrans.info/", file: "etrans.png" },
  { id: "daikin", url: "https://daikin-climate.com", file: "daikin.png" },
  { id: "aura", url: "https://auraproject.webstead.ru/", file: "aura.png" },
  { id: "vektor", url: "https://vlagostoykie-dveri.ru/", file: "vektor.png" },
  { id: "spinny-lk", url: "https://lk.spinny.ru/", file: "spinny-dashboard.png" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  locale: "ru-RU",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
});

for (const shot of shots) {
  const page = await context.newPage();
  try {
    console.log(`→ ${shot.id}: ${shot.url}`);
    await page.goto(shot.url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await page.waitForTimeout(3500);
    await page.evaluate(() => {
      const selectors = [
        "[class*='cookie']",
        "[id*='cookie']",
        "[class*='Cookie']",
        ".fc-consent-root",
        "#cookie-notice",
      ];
      for (const s of selectors) {
        document.querySelectorAll(s).forEach((el) => {
          el.style.display = "none";
        });
      }
    });
    await page.screenshot({
      path: path.join(OUT, shot.file),
      type: "png",
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log(`✓ ${shot.file}`);
  } catch (err) {
    console.error(`✗ ${shot.id}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done");
