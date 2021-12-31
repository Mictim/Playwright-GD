import { test, expect } from "@playwright/test";
import { User } from "../src/dto/User";
import { SignInSteps } from "../src/steps/SignInSteps";


  test("Sign In Test", async ({ page }) => {
    const user = new User("", "mj_raid2002@gmail.com", "qazwsx123");
    await page.goto("/");

    const signInSteps = new SignInSteps(page);
    await signInSteps.openSignInPageStep();
    await signInSteps.completeLoginStep(user);

    await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
  });

