import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

const routes = [
  "/",
  "/product",
  "/features",
  "/solutions",
  "/pricing",
  "/about",
  "/contact",
];
test("all seven routes have metadata, working local assets, responsive layouts, and accessible markup", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const assets = new Set<string>();
  const titles = new Set<string>();
  await mkdir("test-results/screenshots", { recursive: true });
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    const title = await page.title();
    expect(title).toContain("JeriFlow");
    expect(titles.has(title)).toBe(false);
    titles.add(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.{30,}/,
    );
    await expect(
      page.locator('meta[property="og:image"]').first(),
    ).toHaveAttribute("content", /opengraph-image/);
    await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute(
      "content",
      /noindex/,
    );
    const refs = await page.locator("img").evaluateAll(async (elements) => {
      const images = elements.filter(
        (el): el is HTMLImageElement => el instanceof HTMLImageElement,
      );
      images.forEach((el) => {
        el.loading = "eager";
      });
      await Promise.all(images.map((el) => el.decode().catch(() => {})));
      return images.map((el) => ({
        src: el.getAttribute("src"),
        loaded: el.complete && el.naturalWidth > 0,
      }));
    });
    for (const image of refs) {
      expect(image.loaded).toBe(true);
      if (image.src?.startsWith("/assets/")) assets.add(image.src);
    }
    for (const width of [360, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      if (width === 390 || width === 1440)
        await page.screenshot({
          path: `test-results/screenshots/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
          fullPage: true,
        });
    }
    // Evaluate contrast after responsive scroll reveals have finished.
    await page.evaluate(async () => {
      await new Promise(requestAnimationFrame);
      await Promise.all(document.getAnimations().filter(animation => animation.effect?.getTiming().iterations !== Infinity).map(animation => animation.finished.catch(() => {})));
    });
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      accessibility.violations,
      `${route}: ${JSON.stringify(accessibility.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
    ).toEqual([]);
    const links = await page
      .locator("a")
      .evaluateAll((elements) =>
        elements
          .map((a) => a.getAttribute("href"))
          .filter((href): href is string => Boolean(href)),
      );
    for (const href of links) {
      if (href.startsWith("#"))
        expect(
          await page.locator(href).count(),
          `${route} ${href}`,
        ).toBeGreaterThan(0);
      else if (href.startsWith("/"))
        expect(routes.includes(href.split("#")[0]), href).toBe(true);
    }
  }
  for (const asset of assets)
    expect((await request.get(asset)).status(), asset).toBe(200);
  expect(errors).toEqual([]);
});

test("mobile navigation supports focus, Escape, navigation and active state", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 850 });
  await page.goto("/");
  const toggle = page.locator("button.menu-toggle");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await expect(nav).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(
    nav.getByRole("link", { name: "Product", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(nav).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await nav.getByRole("link", { name: "Pricing", exact: true }).click();
  await expect(page).toHaveURL(/\/pricing$/);
  await expect(nav).toBeHidden();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    nav.getByRole("link", { name: "Pricing", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("yearly pricing applies the declared 20 percent discount and restores monthly prices", async ({
  page,
}) => {
  await page.goto("/pricing");
  const creator = page.locator(".price-card").filter({
    has: page.getByRole("heading", { name: "Creator", exact: true }),
  });
  const team = page
    .locator(".price-card")
    .filter({ has: page.getByRole("heading", { name: "Team", exact: true }) });
  await expect(creator.locator(".plan-price strong")).toHaveText("$12");
  await page.getByRole("button", { name: /Yearly/ }).click();
  await expect(creator.locator(".plan-price strong")).toHaveText("$9.60");
  await expect(team.locator(".plan-price strong")).toHaveText("$19.20");
  await expect(creator.locator(".billing-note")).toContainText("$115.20");
  await expect(team.locator(".billing-note")).toContainText("$230.40");
  await page.getByRole("button", { name: "Monthly", exact: true }).click();
  await expect(creator.locator(".plan-price strong")).toHaveText("$12");
  const faq = page.locator("details").first();
  await faq.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(faq).toHaveAttribute("open", "");
});

test("workspace tabs, sample tasks, progress and sample projects work without a backend", async ({
  page,
}) => {
  await page.goto("/product");
  const demo = page.locator(".workspace-demo");
  await demo.getByRole("tab", { name: "Board", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    demo.getByRole("tab", { name: "Tasks", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await demo.getByRole("tab", { name: "Notes", exact: true }).click();
  await expect(
    demo.getByRole("heading", { name: "Website redesign", exact: true }),
  ).toBeVisible();
  await demo.getByRole("tab", { name: "Board", exact: true }).click();
  await demo
    .getByRole("button", {
      name: "Move Define landing page content to In progress",
      exact: true,
    })
    .click();
  await expect(demo.getByRole("status")).toContainText("moved to In progress");
  await demo
    .getByRole("button", {
      name: "Move Define landing page content to Done",
      exact: true,
    })
    .click();
  await demo.getByRole("tab", { name: "Progress", exact: true }).click();
  await expect(demo.locator(".progress-head strong")).toHaveText("50%");
  await demo
    .getByRole("button", { name: "Add sample task", exact: true })
    .click();
  await expect(
    demo.getByText("New sample task 1", { exact: true }),
  ).toBeVisible();
  await demo
    .getByRole("button", { name: "Brand refresh", exact: true })
    .filter({ visible: true })
    .click();
  await expect(
    demo.getByText("Collect visual references", { exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(
    demo.getByText("New sample task 1", { exact: true }),
  ).toHaveCount(0);
});

test("contact validation is accessible and does not pretend to send a message", async ({
  page,
}) => {
  const submissions: string[] = [];
  page.on("request", (req) => {
    if (req.method() === "POST") submissions.push(req.url());
  });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Check demo message" }).click();
  await expect(page.locator("#contact-form").getByRole("alert")).toBeVisible();
  await expect(page.getByLabel("Your name")).toBeFocused();
  await page.getByLabel("Your name").fill("Sample Visitor");
  await page.getByLabel("Email address").fill("not-an-email");
  await page.getByLabel("What's on your mind?").fill("Product concept");
  await page
    .getByLabel("Your message")
    .fill(
      "I would like to discuss the workspace design and interaction details.",
    );
  await page.getByRole("button", { name: "Check demo message" }).click();
  await expect(page.getByLabel("Email address")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.getByLabel("Email address").fill("visitor@example.test");
  await page.getByRole("button", { name: "Check demo message" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Nothing was sent or stored.",
  );
  expect(submissions).toEqual([]);
});

test("preview indexing, social image, reduced motion and a useful 404 behave correctly", async ({
  page,
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).not.toContain("<loc>");
  await page.goto("/");
  const image = await page
    .locator('meta[property="og:image"]')
    .first()
    .getAttribute("content");
  expect(image).toBeTruthy();
  const og = await request.get(
    new URL(image!, "http://127.0.0.1:3011").pathname,
  );
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  const missing = await page.goto("/missing-page");
  expect(missing?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Back to JeriFlow", exact: true }),
  ).toBeVisible();
});
