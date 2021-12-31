import { expect } from "@playwright/test";
import { User } from "../src/dto/User";
import test from "../src/fixtures/LoginFixture";
  
  test(`Sign Up Test`, async ({page, signUpSteps}) => {
    const user = User.useRandomUser();
    await page.goto("/");
  
    await signUpSteps.openSignUpPageStep();
    await signUpSteps.completeNewUserCreationStep(user);

    await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
  });


