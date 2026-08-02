const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  for (const path of ["/", "/portfolio"]) {
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const results = await new AxeBuilder({ page }).withTags(["wcag2aa"]).analyze();
    console.log(`\n=== ${path} ===`);
    for (const v of results.violations) {
      for (const node of v.nodes) {
        const data = node.any?.[0]?.data;
        if (data) {
          console.log(`fg=${data.fgColor} bg=${data.bgColor} ratio=${data.contrastRatio} needed=${data.expectedContrastRatio} | ${node.target.join(" ")}`);
          console.log(`  html: ${node.html.slice(0, 150)}`);
        }
      }
    }
  }

  await browser.close();
})();
