import { expect } from "@playwright/test";
import { User } from "../src/dto/User";
import test from "../src/fixtures/LoginFixture";
 
//test.describe("Sign in and signUp checks", async() => {
  const user = User.useRandomUser();
  test(`Sign Up test for user: ${user.getUsername()}`, async ({page, signUpSteps}) => {
  
    await page.goto("/");
  
    await signUpSteps.openSignUpPageStep();
    await signUpSteps.completeNewUserCreationStep(user);

    await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
  });
//})

