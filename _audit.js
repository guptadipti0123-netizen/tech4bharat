const { chromium } = require("playwright");

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
  "/success-stories/agrosense-ritika-deshmukh",
  "/blogs",
  "/contact",
  "/privacy",
  "/terms",
  "/maintenance",
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const report = {};
  const failedRequests = [];

  page.on("response", (res) => {
    const status = res.status();
    if (status >= 400) {
      failedRequests.push(`${status} ${res.url()}`);
    }
  });

  for (const path of pages) {
    const consoleErrors = [];
    const pageErrors = [];
    const handler = (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    };
    const errHandler = (err) => pageErrors.push(err.message);
    page.on("console", handler);
    page.on("pageerror", errHandler);

    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    // Check for broken images (loaded but naturalWidth 0)
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      return imgs
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.src);
    });

    // Check H1 count
    const h1Count = await page.evaluate(() => document.querySelectorAll("h1").length);

    // Check title/meta description present
    const title = await page.title();
    const metaDesc = await page.evaluate(() => document.querySelector('meta[name="description"]')?.content || "");

    report[path] = {
      consoleErrors: consoleErrors.filter((e) => !e.includes("ERR_CONNECTION_REFUSED")),
      pageErrors,
      brokenImages,
      h1Count,
      title,
      hasMetaDesc: !!metaDesc,
    };

    page.off("console", handler);
    page.off("pageerror", errHandler);
  }

  await browser.close();

  console.log(JSON.stringify(report, null, 2));
  console.log("\n=== FAILED NETWORK REQUESTS (4xx/5xx) ===");
  console.log([...new Set(failedRequests)].join("\n") || "none");
})();
