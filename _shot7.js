const { chromium } = require("playwright");
const OUT = "C:/Users/ganes/AppData/Local/Temp/claude/d--tech4bharat/86b0bcea-400f-4365-948a-7381f43c27df/scratchpad";

async function scrollThrough(page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

const pages = [
  { path: "/portfolio", name: "new-portfolio" },
  { path: "/mentors", name: "new-mentors" },
  { path: "/success-stories", name: "new-success-stories" },
  { path: "/success-stories/agrosense-ritika-deshmukh", name: "new-success-story-detail" },
  { path: "/blogs", name: "new-blogs" },
  { path: "/focus-areas", name: "fixed-focus-areas" },
  { path: "/partners", name: "fixed-partners" },
  { path: "/contact", name: "fixed-contact" },
  { path: "/events/tech4bharat-startup-bootcamp-2026", name: "fixed-event-agenda" },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(e.message));

  for (const p of pages) {
    await page.goto(`http://localhost:3000${p.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    await scrollThrough(page);
    await page.screenshot({ path: `${OUT}/${p.name}.png`, fullPage: true });
    console.log(`captured ${p.name}`);
  }

  await browser.close();
  console.log("--- console errors ---");
  console.log(errors.filter((e) => !e.includes("ERR_CONNECTION_REFUSED")).join("\n") || "none");
})();
