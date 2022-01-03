import { expect } from "@playwright/test";
import { User } from "../src/dto/User";
import test from "../src/fixtures/LoginFixture";

test.describe('Login Tests', async() => {
    test("Sign In Test", async ({ page, signInSteps }) => {
        const user = new User("", "mj_raid2002@gmail.com", "qazwsx123");
        await page.goto("/");
    
        await signInSteps.openSignInPageStep();
        await signInSteps.completeLoginStep(user);
    
        await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
      });

      test(`Sign Up Test`, async ({page, signUpSteps}) => {
        const user = User.useRandomUser();
        await page.goto("/");
      
        await signUpSteps.openSignUpPageStep();
        await signUpSteps.completeNewUserCreationStep(user);
    
        await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
      });
})