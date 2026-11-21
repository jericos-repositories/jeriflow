import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 1440]) {
  test(`all six feature demos work locally at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    const writes: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("request", request => {
      if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method())) writes.push(request.url());
    });
    await page.goto("/features");

    const tasks = page.locator("#task-management");
    const task = tasks.getByRole("checkbox", { name: /Build the first page/ });
    await task.focus();
    await page.keyboard.press("Space");
    await expect(task).toBeChecked();
    await expect(tasks.getByRole("progressbar")).toHaveAttribute("value", "2");
    await expect(tasks.getByText("67%", { exact: true })).toBeVisible();
    await page.keyboard.press("Space");
    await expect(task).not.toBeChecked();
    for (const checkbox of await tasks.getByRole("checkbox").all()) await checkbox.check();
    await expect(tasks.getByRole("progressbar")).toHaveAttribute("value", "3");
    await tasks.getByRole("button", { name: "Reset demo: task management" }).click();
    await expect(tasks.getByRole("progressbar")).toHaveAttribute("value", "1");

    const board = page.locator("#project-boards");
    const forward = board.getByRole("button", { name: "Move Shape the idea forward" });
    await forward.focus();
    await page.keyboard.press("Enter");
    await expect(board.getByRole("status")).toHaveText("Shape the idea moved to In progress.");
    await expect(forward).toBeFocused();
    await page.keyboard.press("Enter");
    const back = board.getByRole("button", { name: "Move Shape the idea back" });
    await expect(back).toBeFocused();
    await expect(forward).toBeDisabled();
    await expect(board.getByRole("status")).toHaveText("Shape the idea moved to Done.");
    await page.keyboard.press("Enter");
    await expect(board.getByRole("status")).toHaveText("Shape the idea moved to In progress.");
    await board.getByRole("button", { name: "Reset demo: project boards" }).click();
    await expect(back).toBeDisabled();
    for (const column of await board.locator(".jf-demo-column").all()) {
      await expect(column.getByRole("article")).toHaveCount(1);
    }

    const team = page.locator("#team-collaboration");
    for (const name of ["Jules Lee", "Alex Santos", "Maya Kim"]) {
      const member = team.getByRole("button", { name: new RegExp(name) });
      await member.focus();
      await page.keyboard.press("Enter");
      await expect(member).toHaveAttribute("aria-pressed", "true");
      const thread = team.getByRole("button", { name: /Open thread/ });
      await thread.focus();
      await page.keyboard.press("Space");
      await expect(team.getByRole("button", { name: /Close thread/ })).toHaveAttribute("aria-expanded", "true");
      await expect(team.locator("#feature-comment-thread")).toBeVisible();
    }
    await team.getByRole("button", { name: "Reset demo: team collaboration" }).click();
    await expect(team.getByRole("button", { name: /Open thread/ })).toHaveAttribute("aria-expanded", "false");

    const progress = page.locator("#progress-tracking");
    await expect(progress.getByRole("progressbar")).toHaveAttribute("value", "2");
    await progress.getByRole("checkbox", { name: /Frontend build/ }).check();
    await expect(progress.getByRole("progressbar")).toHaveAttribute("value", "3");
    await expect(progress.getByText("3 completed", { exact: false })).toBeVisible();
    await progress.getByRole("checkbox", { name: /Launch checklist/ }).check();
    await expect(progress.getByRole("progressbar")).toHaveAttribute("value", "4");
    await expect(progress.getByText("Every milestone complete. Ready for handoff.")).toBeVisible();
    await progress.getByRole("button", { name: "Reset demo: progress tracking" }).click();
    await expect(progress.getByRole("progressbar")).toHaveAttribute("value", "2");

    const notes = page.locator("#project-notes");
    const draft = notes.getByRole("textbox", { name: "Creative brief scratchpad" });
    const original = await draft.inputValue();
    await draft.fill("Remember to review the mobile handoff.");
    await notes.getByRole("button", { name: "Design review", exact: true }).click();
    await notes.getByRole("textbox", { name: "Design review scratchpad" }).fill("A separate local review note.");
    await notes.getByRole("button", { name: "Creative brief", exact: true }).click();
    await expect(draft).toHaveValue("Remember to review the mobile handoff.");
    await notes.getByRole("button", { name: "Reset demo: project notes" }).click();
    await expect(draft).toHaveValue(original);

    const workflow = page.locator("#focused-workflows");
    await workflow.getByRole("checkbox", { name: /Build the first page/ }).check();
    await workflow.getByRole("button", { name: "Board", exact: true }).click();
    await expect(workflow.getByRole("checkbox", { name: /Build the first page/ })).toBeChecked();
    await workflow.getByRole("button", { name: "Focus", exact: true }).click();
    await expect(workflow.getByRole("heading", { name: "Build the first page" })).toBeVisible();
    await workflow.getByRole("button", { name: "Completed · undo" }).click();
    await workflow.getByRole("button", { name: "Next focus task" }).click();
    await expect(workflow.getByRole("heading", { name: "Prepare the handoff notes" })).toBeVisible();
    await workflow.getByRole("button", { name: "Mark complete" }).click();
    await workflow.getByRole("button", { name: "List", exact: true }).click();
    await expect(workflow.getByRole("checkbox", { name: /Build the first page/ })).not.toBeChecked();
    await expect(workflow.getByRole("checkbox", { name: /Prepare the handoff notes/ })).toBeChecked();
    await workflow.getByRole("button", { name: "Reset demo: focused workflows" }).click();
    await expect(workflow.getByRole("checkbox", { name: /Prepare the handoff notes/ })).not.toBeChecked();

    // Feature components keep independent state, and reload clears local edits.
    await expect(tasks.getByRole("progressbar")).toHaveAttribute("value", "1");
    await draft.fill("An unsaved scratchpad edit.");
    await page.reload();
    await expect(draft).toHaveValue(original);
    await notes.getByRole("link", { name: "Website redesign" }).click();
    await expect(page).toHaveURL(/\/product#demo$/);
    await expect(page.locator("#demo")).toBeInViewport();
    expect(writes).toEqual([]);
    expect(errors).toEqual([]);
  });
}

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`features layout and accessible states at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/features");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("main section[id]")).toHaveCount(6);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Everything your work needs. A little less of everything else.");
    const overflow = async () => page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(await overflow()).toBe(false);
    await page.getByRole("button", { name: /Alex Santos/ }).click();
    await page.getByRole("button", { name: /Open thread/ }).click();
    await page.locator("#focused-workflows").getByRole("button", { name: "Board", exact: true }).click();
    expect(await overflow()).toBe(false);
    // Inspect the redesigned page; the unchanged shared header is outside this scope.
    await page.evaluate(async () => {
      await new Promise(requestAnimationFrame);
      await Promise.all(document.getAnimations().filter(animation => animation.effect?.getTiming().iterations !== Infinity).map(animation => animation.finished.catch(() => {})));
    });
    const accessibility = await new AxeBuilder({ page }).include(".jf-feature-page").withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    expect(accessibility.violations).toEqual([]);
    await page.locator("#focused-workflows").getByRole("button", { name: "Focus", exact: true }).click();
    expect(await overflow()).toBe(false);
    const checkbox = page.locator("#task-management").getByRole("checkbox").first();
    await checkbox.focus();
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Tab");
    await expect(checkbox).toBeFocused();
    expect(await checkbox.evaluate(element => getComputedStyle(element).outlineStyle)).toBe("solid");
    if (width < 768) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
    }
  });
}

test("feature entrances and interactions respect reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 600 });
  await page.goto("/features");
  const feature = page.locator("#project-notes");
  await feature.scrollIntoViewIfNeeded();
  await expect.poll(() => feature.evaluate(element => element.getAnimations().length)).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.evaluate(() => document.getAnimations().length)).toBe(0);
  await page.locator("#focused-workflows").getByRole("button", { name: "Focus", exact: true }).click();
  await page.locator("#task-management").getByRole("checkbox", { name: /Build the first page/ }).check();
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  await expect(page.locator("#task-management").getByRole("progressbar")).toHaveAttribute("value", "2");
  await expect(feature).toHaveCSS("opacity", "1");
});
