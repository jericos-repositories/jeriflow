import { test, expect } from "@playwright/test";
import { audiences } from "../../src/lib/content";

test.use({ trace: "off", screenshot: "off", video: "off" });

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`solutions navigation and four local workflows at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    const writes: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    page.on("request", request => { if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method())) writes.push(request.url()); });
    await page.goto("/solutions");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Different kinds of makers. A shared need for clarity.");
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(document.getAnimations().filter(animation => animation.effect?.getTiming().iterations !== Infinity).map(animation => animation.finished.catch(() => {})));
    });

    // Native links preserve deep linking, keyboard use, and sticky-header clearance.
    const nav = page.getByRole("navigation", { name: "Audience sections" });
    for (const audience of audiences) {
      if (width <= 600) await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      const link = nav.getByRole("link", { name: audience.name, exact: true });
      await link.focus();
      await page.keyboard.press("Enter");
      const section = page.locator(`#${audience.id}`);
      await expect(page).toHaveURL(new RegExp(`#${audience.id}$`));
      await expect(link).toHaveAttribute("aria-current", "location");
      await expect.poll(async () => Math.round((await section.boundingBox())!.y)).toBeGreaterThanOrEqual(width > 600 ? 170 : 100);
      await expect(section.getByRole("heading", { name: audience.heading, exact: true })).toBeVisible();
      for (const copy of [audience.problem, audience.benefit, audience.scenario, ...audience.tasks]) {
        await expect(section.getByText(copy, { exact: true })).toBeVisible();
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    }

    // Freelance progress is isolated per client and responds in both directions.
    const freelancer = page.locator("#freelancers");
    const task = freelancer.getByRole("checkbox", { name: /Review the client's feedback/ });
    await task.focus();
    await page.keyboard.press("Space");
    await expect(task).toBeChecked();
    await expect(freelancer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
    await expect(freelancer.getByRole("status")).toContainText("67%");
    await freelancer.getByRole("button", { name: /Forma Goods/ }).click();
    await expect(freelancer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
    for (const checkbox of await freelancer.getByRole("checkbox").all()) await checkbox.check();
    await expect(freelancer.getByText("Ready for handoff", { exact: true })).toBeVisible();
    await freelancer.getByRole("button", { name: /Olive Studio/ }).click();
    await expect(freelancer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
    await task.uncheck();
    await expect(freelancer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "1");
    await freelancer.getByRole("button", { name: "Reset Client projects demo" }).click();

    // Each design pin has contextual feedback; resolving and reopening stay in sync.
    const designer = page.locator("#designers");
    await designer.getByRole("button", { name: "Wireframe", exact: true }).click();
    await expect(designer.getByRole("img", { name: "Wireframe dashboard preview" })).toBeVisible();
    await designer.getByRole("button", { name: "Visual design", exact: true }).click();
    for (const [index, location] of ["Overview cards", "Project activity"].entries()) {
      const pin = designer.getByRole("button", { name: `Comment ${index + 1}: ${location}` });
      if (await pin.getAttribute("aria-expanded") !== "true") {
        await pin.focus();
        await page.keyboard.press("Enter");
      }
      await expect(pin).toHaveAttribute("aria-expanded", "true");
      await expect(designer.locator("#solution-review-feedback")).toContainText(location);
      await designer.getByRole("button", { name: "Mark as resolved", exact: true }).click();
      await expect(designer.getByRole("button", { name: "Resolved · reopen" })).toHaveAttribute("aria-pressed", "true");
    }
    await expect(designer.getByRole("status")).toHaveText("Review complete");
    await designer.getByRole("button", { name: "Resolved · reopen" }).click();
    await expect(designer.getByRole("status")).toHaveText("1 open comments");
    await designer.getByRole("button", { name: "Comment 2: Project activity" }).click();
    await expect(designer.getByText("Select a comment pin to see the conversation.")).toBeVisible();
    await designer.getByRole("button", { name: "Reset Design review demo" }).click();

    // Release status and every progress visualization reflect the actual milestones.
    const developer = page.locator("#developers");
    for (const checkbox of await developer.getByRole("checkbox").all()) await checkbox.uncheck();
    await expect(developer.getByRole("progressbar")).toHaveAttribute("aria-valuetext", "0% complete");
    for (const [index, checkbox] of (await developer.getByRole("checkbox").all()).entries()) {
      await checkbox.focus();
      await page.keyboard.press("Space");
      await expect(developer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", String(index + 1));
      await expect(developer.getByRole("status")).toContainText(`${Math.round((index + 1) / 3 * 100)}%`);
      await expect(developer.locator(".sd-ring-fill")).toHaveAttribute("stroke-dashoffset", String(100 - Math.round((index + 1) / 3 * 100)));
    }
    await expect(developer.getByText("Ready to release", { exact: true })).toBeVisible();
    await developer.getByRole("button", { name: "Reset Release plan demo" }).click();
    await expect(developer.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "1");

    // Team selection connects an owner, a responsibility, a priority, and an update.
    const team = page.locator("#small-teams");
    for (const name of ["Maya", "Noah", "Alex"]) {
      const member = team.getByRole("button", { name: new RegExp(`^${name} (Designer|Developer|Project lead)$`) });
      await member.focus();
      await page.keyboard.press("Enter");
      await expect(member).toHaveAttribute("aria-pressed", "true");
      await expect(team.getByText(`${name}’s focus`, { exact: true })).toBeVisible();
      const update = team.getByRole("button", { name: new RegExp(`${name}’s project update`) });
      await update.focus();
      await page.keyboard.press("Space");
      await expect(update).toHaveAttribute("aria-expanded", "true");
      await expect(team.locator("#solution-team-update")).toBeVisible();
      await page.keyboard.press("Space");
      await expect(update).toHaveAttribute("aria-expanded", "false");
    }
    await team.getByRole("button", { name: "Connect design and development — assigned to Maya" }).click();
    await expect(team.getByText("Maya’s focus", { exact: true })).toBeVisible();
    await team.getByRole("button", { name: "Reset Team workspace demo" }).click();
    await expect(team.getByText("Alex’s focus", { exact: true })).toBeVisible();
    expect(errors).toEqual([]);
    expect(writes).toEqual([]);
  });
}

test("solutions reveals once, tracks manual scrolling, and supports reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/solutions");
  const preview = page.locator("#designers .solutions-preview");
  await preview.scrollIntoViewIfNeeded();
  await expect.poll(() => preview.evaluate(el => el.getAnimations().length)).toBeGreaterThan(0);
  await preview.evaluate(el => Promise.all(el.getAnimations().map(a => a.finished.catch(() => {}))));
  await expect(preview).toHaveCSS("opacity", "1");
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await preview.scrollIntoViewIfNeeded();
  expect(await preview.evaluate(el => el.getAnimations().length)).toBe(0);
  const developers = page.locator("#developers");
  await developers.evaluate(el => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 180, behavior: "instant" }));
  await expect(page.getByRole("navigation", { name: "Audience sections" }).getByRole("link", { name: "Developers", exact: true })).toHaveAttribute("aria-current", "location");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await developers.getByRole("checkbox").last().check();
  await expect(developers.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
  await expect(developers.locator(".sd-progress > span")).toHaveCSS("transition-duration", "0s");
  await page.reload();
  await expect(developers.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "1");
});

test("original solutions content and section links remain available without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(`${baseURL}/solutions`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const audience of audiences) {
    const section = page.locator(`#${audience.id}`);
    await expect(section.getByRole("heading", { name: audience.heading, exact: true })).toBeVisible();
    for (const text of [audience.problem, audience.benefit, audience.scenario, ...audience.tasks]) await expect(section.getByText(text, { exact: true })).toBeVisible();
  }
  await page.getByRole("navigation", { name: "Audience sections" }).getByRole("link", { name: "Designers", exact: true }).click();
  await expect(page).toHaveURL(/#designers$/);
  await expect(page.locator("#designers")).toBeInViewport();
  await context.close();
});
