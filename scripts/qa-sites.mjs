import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { loadBusinesses } from "./load-businesses.mjs";

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:4173";
const ownsServer = !process.env.QA_BASE_URL;
const profiles = [
  { name: "desktop", viewport: { width: 1366, height: 900 } },
  { name: "mobile", viewport: { width: 390, height: 844 } },
];

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/index.html`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`QA server did not become ready at ${baseUrl}`);
}

const server = ownsServer ? spawn("python3", ["-m", "http.server", "4173", "-d", "dist/client"], { stdio: "ignore" }) : null;
let browser;

try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const businesses = await loadBusinesses();
  const results = [];
  await fs.rm("qa-artifacts", { recursive: true, force: true });
  await fs.mkdir("qa-artifacts/screenshots", { recursive: true });

  for (const profile of profiles) {
    const context = await browser.newContext({ viewport: profile.viewport });
    for (const [index, business] of businesses.entries()) {
      const page = await context.newPage();
      const runtimeErrors = [];
      page.on("pageerror", (error) => runtimeErrors.push(error.message));
      const url = `${baseUrl}/site.html?id=${business.id}`;
      const response = await page.goto(url, { waitUntil: "domcontentloaded" });
      const evidence = await page.evaluate(({ expectedName, mobileContact }) => {
        const cta = document.querySelector(".floating-wa,.floating-call");
        return {
          titleMatches: document.title.includes(expectedName),
          hasConceptNotice: Boolean(document.querySelector(".prototype-note")),
          hasHeadline: Boolean(document.querySelector("h1")?.textContent?.trim()),
          ownerPhotoBriefs: document.querySelectorAll(".photo-brief").length,
          conceptImages: document.querySelectorAll(".photo-gallery img").length,
          researchLabels: document.querySelectorAll(".business-ribbon small").length,
          hasResearchSource: Boolean(document.querySelector(".research-note a")),
          misleadingCopyAbsent: !document.body.textContent.includes("I found your website"),
          genericCopyAbsent: !document.body.textContent.includes("Contact the team for current availability"),
          contactModeCorrect: mobileContact ? cta?.classList.contains("floating-wa") : cta?.classList.contains("floating-call"),
          formModeCorrect: mobileContact ? document.querySelector("#bespokeForm button")?.textContent.includes("WhatsApp") : document.querySelector("#bespokeForm button")?.textContent.includes("Copy enquiry"),
          noHorizontalOverflow: document.documentElement.scrollWidth <= document.documentElement.clientWidth,
          accessibilityLabelsPresent: document.querySelectorAll("img:not([alt]),iframe:not([title])").length === 0,
        };
      }, { expectedName: business.name, mobileContact: business.phone.startsWith("601") });

      const checks = { httpOk: Boolean(response?.ok()), noRuntimeErrors: runtimeErrors.length === 0, ...evidence };
      const failures = Object.entries(checks).filter(([, value]) => value !== true).map(([name]) => name);
      const result = {
        reference: `SITE-${String(index + 1).padStart(2, "0")}`,
        businessName: business.name,
        profile: profile.name,
        url: url.replace(baseUrl, "https://mdotak.github.io/shah-alam-local-30-preview"),
        passed: failures.length === 0,
        failures,
        checks,
      };
      results.push(result);
      if (!result.passed) await page.screenshot({ path: path.join("qa-artifacts/screenshots", `${business.id}-${profile.name}.png`), fullPage: true });
      await page.close();
    }
    await context.close();
  }

  const failed = results.filter((result) => !result.passed);
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    businesses: 30,
    profiles: profiles.map((profile) => profile.name),
    runs: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    outreachUnlocked: false,
    results,
  };
  await fs.writeFile("qa-artifacts/payton-qa.json", `${JSON.stringify(report, null, 2)}\n`);
  const rows = results.map((result) => `| ${result.reference} | ${result.businessName} | ${result.profile} | ${result.passed ? "PASS" : `FAIL: ${result.failures.join(", ")}`} |`);
  await fs.writeFile("qa-artifacts/payton-qa.md", `# Payton QA Report\n\n- Runs: ${report.runs}\n- Passed: ${report.passed}\n- Failed: ${report.failed}\n- Outreach: locked\n\n| Record | Business | Profile | Result |\n|---|---|---|---|\n${rows.join("\n")}\n`);
  console.log(`Payton QA: ${report.passed}/${report.runs} profile runs passed.`);
  if (failed.length) process.exitCode = 1;
} finally {
  await browser?.close();
  server?.kill("SIGTERM");
}

