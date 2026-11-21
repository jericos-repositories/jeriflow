import { test, expect } from "@playwright/test";

test("hero motion preserves its composition at every requested width and responds to hover", async ({ page }) => {
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {})));
    });
    const result = await page.evaluate(() => {
      const art = document.querySelector(".hero-art")!;
      const bounds = art.getBoundingClientRect();
      const headline = document.querySelector(".hero h1")!.getBoundingClientRect();
      const floats = art.getAnimations({ subtree: true }).filter(a => a.effect?.getTiming().iterations === Infinity);
      return {
        withinViewport: bounds.left >= 0 && bounds.right <= innerWidth,
        aspectRatio: bounds.width / bounds.height,
        clearOfHeadline: bounds.bottom < headline.top,
        overflow: document.documentElement.scrollWidth > innerWidth,
        floatCount: floats.length,
        durations: floats.map(a => a.effect!.getTiming().duration),
        delays: Array.from(document.querySelectorAll(".hero-line, .hero-description, .hero .button-row")).map(el => parseFloat(getComputedStyle(el).animationDelay)),
      };
    });
    expect(result.withinViewport).toBe(true);
    expect(result.aspectRatio).toBeCloseTo(540 / 160, 2);
    expect(result.clearOfHeadline).toBe(true);
    expect(result.overflow).toBe(false);
    expect(result.floatCount).toBe(5);
    expect(new Set(result.durations).size).toBe(5);
    expect(result.delays).toEqual([...result.delays].sort((a, b) => a - b));
    // Sample a full floating cycle: the glyph must stay within its circle and
    // the illustration must keep clear of the text even at maximum travel.
    const travel = await page.locator(".hero-art-float").first().evaluate(async el => {
      const animation = el.getAnimations()[0];
      animation.pause();
      const timing = animation.effect!.getTiming();
      animation.currentTime = timing.delay ?? 0;
      await new Promise(requestAnimationFrame);
      const before = el.getBoundingClientRect();
      animation.currentTime = (timing.delay ?? 0) + Number(timing.duration) / 2;
      await new Promise(requestAnimationFrame);
      const after = el.getBoundingClientRect();
      return Math.abs(after.y - before.y);
    });
    expect(travel).toBeGreaterThan(0.5);
    expect(travel).toBeLessThan(6);
  }
  const button = page.locator(".hero .button-primary");
  await page.mouse.move(0, 0);
  const before = await button.boundingBox();
  await button.hover();
  await expect.poll(async () => Math.round((await button.boundingBox())!.y - before!.y)).toBe(-2);
  await expect(button).toHaveCSS("cursor", "pointer");
  const illustration = page.locator(".hero-art-hover").first();
  await illustration.hover();
  await expect.poll(() => illustration.evaluate(el => new DOMMatrix(getComputedStyle(el).transform).m42)).toBe(-3);
});

test("dashboard reveals once on viewport entry and stays visible when revisited", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 400 });
  await page.goto("/");
  const dashboard = page.locator(".workspace-demo");
  await expect(dashboard).toHaveCSS("opacity", "1");
  expect(await dashboard.evaluate(el => el.getAnimations().length)).toBe(0);
  await page.evaluate(() => {
    const top = document.querySelector(".workspace-demo")!.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top - 130, behavior: "instant" });
  });
  await expect.poll(() => dashboard.evaluate(el => el.getAnimations().length)).toBe(1);
  const keyframes = await dashboard.evaluate(el => (el.getAnimations()[0].effect as KeyframeEffect).getKeyframes());
  expect(keyframes[0].opacity).toBe("0");
  expect(keyframes[0].transform).toContain("scale(0.98)");
  await dashboard.evaluate(async el => { await Promise.all(el.getAnimations().map(a => a.finished)); });
  await expect(dashboard).toHaveCSS("opacity", "1");
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await dashboard.scrollIntoViewIfNeeded();
  expect(await dashboard.evaluate(el => el.getAnimations().length)).toBe(0);
  await expect(dashboard).toHaveCSS("transform", "none");
});

test("reduced motion is visible immediately and changing the preference cancels scroll motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/product", "/features", "/solutions", "/pricing", "/about", "/contact"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator(".hero-line, .page-intro").first()).toHaveCSS("opacity", "1");
    expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  }
  await page.setViewportSize({ width: 390, height: 400 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const dashboard = page.locator(".workspace-demo");
  await dashboard.scrollIntoViewIfNeeded();
  await expect.poll(() => dashboard.evaluate(el => el.getAnimations().length)).toBe(1);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(dashboard).toHaveCSS("opacity", "1");
  await expect(dashboard).toHaveCSS("transform", "none");
  await page.getByRole("tab", { name: "Notes", exact: true }).click();
  await expect(page.locator(".sample-note")).toBeVisible();
});

test("marketing content and native FAQs remain available without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const page = await context.newPage();
  for (const route of ["/", "/product", "/features", "/solutions", "/pricing", "/about", "/contact"]) {
    await page.goto(`http://127.0.0.1:3011${route}`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator(".hero-line, .page-intro").first()).toHaveCSS("opacity", "1");
  }
  await page.goto("http://127.0.0.1:3011/pricing");
  const faq = page.locator("details").first();
  await faq.locator("summary").click();
  await expect(faq.locator("p")).toBeVisible();
  await context.close();
});

test("client navigation initializes new section reveals and preserves deep links", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Features", exact: true }).click();
  await expect(page).toHaveURL(/\/features$/);
  const section = page.locator(".feature-story").last();
  await section.scrollIntoViewIfNeeded();
  await expect.poll(() => section.evaluate(el => el.getAnimations().length)).toBe(1);
  await section.evaluate(async el => { await Promise.all(el.getAnimations().map(a => a.finished)); });
  await expect(section).toHaveCSS("opacity", "1");
  await page.goto("/product#demo");
  await expect(page.locator("#demo")).toBeInViewport();
  await page.getByRole("tab", { name: "Tasks", exact: true }).focus();
  await expect(page.getByRole("tab", { name: "Tasks", exact: true })).toBeFocused();
  await expect(page.locator(".workspace-demo")).toHaveCSS("opacity", "1");
});
