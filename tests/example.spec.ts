import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  
  await page.goto("https://maps.google.com");
  await page.click("form button");
  await page.click('button[aria-label="Your Location"]');
  expect(page.locator("button[aria-label='Menu']")).toBeTruthy();
});
