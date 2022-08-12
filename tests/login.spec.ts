import { expect } from "@playwright/test";
import { User } from "../src/dto/User";
import test from "../src/fixtures/LoginFixture";
import { allure } from "allure-playwright";
import users from "../src/resources/newUsers.json";
import { randomInt } from "crypto";

test.describe.parallel('Login Tests @login', async () => {

  test.beforeEach(async () => {
    allure.link({ url: "https://angular.realworld.io", name: "Angular Example page" });
  })

  test("Sign In Test", async ({ page, signInSteps }) => {
    allure.feature('Sign In check');
    allure.tag("Login");
    allure.severity("Critical");
    allure.issue({
      url: "https://github.com/Mictim/Playwright-GD/issues/2",
      name: "Sign in Test"
    });

    const user = new User("", "mj_raid2002@gmail.com", "qazwsx123");
    await page.goto("/");

    await signInSteps.openSignInPageStep();
    await signInSteps.completeLoginStep(user);

    await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
  });

  users.users.forEach(user => {
    test.only(`Sign Up Test for new user: ${user.username}`, async ({ page, signUpSteps }) => {
      allure.feature('Sign Up checks');
      allure.tag("Login");
      allure.tms({
        url: "https://github.com/Mictim/Playwright-GD/issues/3",
        name: "Sign Up Test"
      });

      await page.goto("/");

      await signUpSteps.openSignUpPageStep();
      const ran: number = randomInt(10000);
      await signUpSteps.completeNewUserCreationStep(new User(`${user.username}${ran}`, user.email.replace("XXX", ran.toString()), user.password));

      await expect(page.locator("a:has-text('Your Feed')")).toHaveClass(/active/);
    });
  });

})