import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "projects");
fs.mkdirSync(OUT, { recursive: true });

function copy(src, destBase) {
  if (!src || !fs.existsSync(src)) {
    console.error("missing", src);
    return null;
  }
  const ext = path.extname(src).toLowerCase() || ".jpg";
  const destName = destBase.replace(/\.(png|jpg|jpeg|webp)$/i, "") + ext;
  const dest = path.join(OUT, destName);
  fs.copyFileSync(src, dest);
  console.log("✓ copy", destName, Math.round(fs.statSync(dest).size / 1024) + "KB");
  return destName;
}

function download(url, destName) {
  return new Promise((resolve) => {
    const dest = path.join(OUT, destName);
    const lib = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    lib
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location, destName).then(resolve);
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("✓ dl", destName, Math.round(fs.statSync(dest).size / 1024) + "KB");
          resolve(true);
        });
      })
      .on("error", (e) => {
        console.error("✗ dl", destName, e.message);
        resolve(false);
      });
  });
}

// Local Work assets — product/hero photography, not page screenshots
const local = [
  ["moonera", "C:\\Work\\Moonera\\moonera-frontend\\public\\images\\products\\hero.jpg"],
  [
    "cantexniki",
    "C:\\Work\\Cantexniki\\reakt-cantexniki\\cantexniki-frontend\\public\\pictures\\main1.1.png",
  ],
  [
    "paradim",
    "C:\\Work\\Paradim\\paradim\\public\\images\\services\\dizayn-interera-hero.jpg",
  ],
  [
    "poseidon-doors",
    "C:\\Work\\dvernoyton\\dvernoyton-project\\assets\\images\\pictures\\index\\banner.jpg",
  ],
  ["lauhtin", "C:\\Work\\Lauhtin\\assets\\images\\hero.png"],
  [
    "goodhouse",
    "C:\\Work\\GoodHouse\\web\\public\\tilda\\images\\tild3666-3462-4966-b138-623262343863__4_8.png",
  ],
  [
    "doors-russia",
    "C:\\Work\\kyptsovv\\dveri\\doors-russia-frontend\\public\\images\\catalog\\zeus-5.png",
  ],
  [
    "interbuilding",
    "C:\\Work\\interbuilding\\interbuilding-promo-git\\interbuilding-promo\\assets\\images\\pictures\\hero-bg.png",
  ],
  [
    "velesstroy",
    "C:\\Work\\velstroy\\career-velesstroy-en\\public_html\\wp-content\\themes\\velesstroy\\assets\\images\\about_main\\about_baner2.png",
  ],
  [
    "abpetrov",
    (() => {
      const dir = "C:\\Work\\ABPetrov\\abpetrov-frontend\\public\\images";
      if (!fs.existsSync(dir)) return null;
      return fs
        .readdirSync(dir)
        .map((f) => path.join(dir, f))
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .map((f) => ({ f, s: fs.statSync(f).size }))
        .sort((a, b) => b.s - a.s)[0]?.f;
    })(),
  ],
];

/** @type {Record<string, string>} */
const imageMap = {};

for (const [base, src] of local) {
  const name = copy(src, base);
  if (name) imageMap[base] = "/projects/" + name;
}

// Sites needing image pick from live page (og:image or largest content img)
const remotePages = [
  { file: "spinny.png", url: "https://spinny.ru" },
  { file: "konstanta.png", url: "https://konstantas.ru" },
  { file: "st-doors.png", url: "https://st-doors.webstead.ru/" },
  { file: "daikin.png", url: "https://daikin-climate.com" },
  { file: "etrans.png", url: "https://etrans.info/" },
  { file: "kuptsov.png", url: "https://kuptsovwrealty.ru" },
  { file: "aura.png", url: "https://auraproject.webstead.ru/" },
  { file: "vektor.png", url: "https://vlagostoykie-dveri.ru/" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  locale: "ru-RU",
});

for (const item of remotePages) {
  const page = await context.newPage();
  try {
    console.log("→ probe", item.url);
    await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2500);
    const best = await page.evaluate(() => {
      const og = document.querySelector('meta[property="og:image"]')?.content;
      const imgs = [...document.images]
        .map((img) => ({
          src: img.currentSrc || img.src,
          w: img.naturalWidth,
          h: img.naturalHeight,
          area: img.naturalWidth * img.naturalHeight,
        }))
        .filter(
          (i) =>
            i.src &&
            i.area > 80000 &&
            !/logo|icon|flag|sprite|svg|1x1|pixel|avatar|favicon/i.test(i.src),
        )
        .sort((a, b) => b.area - a.area);
      return { og, top: imgs[0]?.src || null };
    });
    const pick = best.top || best.og;
    if (!pick) {
      console.error("✗ no image", item.file);
      continue;
    }
    const abs = new URL(pick, item.url).href;
    console.log("  picked", abs.slice(0, 120));
    await download(abs, item.file);
  } catch (e) {
    console.error("✗", item.file, e.message);
  } finally {
    await page.close();
  }
}

await browser.close();

for (const item of remotePages) {
  const p = path.join(OUT, item.file);
  if (fs.existsSync(p) && fs.statSync(p).size > 10000) {
    imageMap[item.file.replace(/\.(png|jpg|jpeg|webp)$/i, "")] =
      "/projects/" + item.file;
  }
}

fs.writeFileSync(
  path.join(__dirname, "image-map.json"),
  JSON.stringify(imageMap, null, 2),
);
console.log("image-map.json", imageMap);
console.log("Done");
