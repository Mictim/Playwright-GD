import { expect } from "@playwright/test";
import { User } from "../src/dto/User";
import test from "../src/fixtures/LoginFixture";

test.describe.parallel('Login Tests', async() => {
  const users: User[] = [User.useRandomUser(), User.useRandomUser(), User.useRandomUser()];
    test("Sign In Test", async ({ page, signInSteps }) => {
        const user = new User("", "mj_raid2002@gmail.com", "qazwsx123");
        await page.goto("/");
    
        await signInSteps.openSignInPageStep();
        await signInSteps.completeLoginStep(user);
    
        await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
      });

      users.forEach(user => {
        test(`Sign Up Test for user: ${user.getUsername()}`, async ({page, signUpSteps}) => {
          await page.goto("/");
        
          await signUpSteps.openSignUpPageStep();
          await signUpSteps.completeNewUserCreationStep(user);
      
          await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
        });
      });
      
})