const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");

const pages = [
  "/",
  "/about",
  "/programs",
  "/focus-areas",
  "/partners",
  "/gallery",
  "/events",
  "/events/tech4bharat-startup-bootcamp-2026",
  "/portfolio",
  "/mentors",
  "/success-stories",
  "/blogs",
  "/contact",
  "/privacy",
  "/terms",
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  let totalViolations = 0;
  for (const path of pages) {
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    if (results.violations.length > 0) {
      totalViolations += results.violations.length;
      console.log(`\n=== ${path} (${results.violations.length} violation types) ===`);
      for (const v of results.violations) {
        console.log(`  [${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`);
        for (const node of v.nodes.slice(0, 2)) {
          console.log(`    - ${node.target.join(" ")}`);
        }
      }
    }
  }

  console.log(`\n\nTOTAL VIOLATION TYPES ACROSS ALL PAGES: ${totalViolations}`);
  await browser.close();
})();
