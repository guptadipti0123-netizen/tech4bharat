const { chromium } = require("playwright");

const pages = ["/", "/about", "/programs", "/gallery", "/events", "/portfolio", "/mentors", "/contact", "/blogs"];
const breakpoints = [
  { name: "mobile", width: 375, height: 800 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

(async () => {
  const browser = await chromium.launch();
  const issues = [];

  for (const bp of breakpoints) {
    const page = await browser.newPage({ viewport: { width: bp.width, height: bp.height } });
    for (const path of pages) {
      await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(250);
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        return { docWidth, winWidth, hasOverflow: docWidth > winWidth + 2 };
      });
      if (overflow.hasOverflow) {
        issues.push(`${bp.name} (${bp.width}px) ${path}: content width ${overflow.docWidth}px > viewport ${overflow.winWidth}px`);
      }
    }
    await page.close();
  }

  await browser.close();
  console.log(issues.length ? issues.join("\n") : "No horizontal overflow detected on any page/breakpoint combination.");
})();
