import { test as base } from "@playwright/test";
import { SignUpSteps } from "../steps/SignUpSteps";
import { SignInSteps } from '../steps/SignInSteps';

const test = base.extend<{
    signUpSteps: SignUpSteps;
    signInSteps: SignInSteps;
}>({
    page: async ({page}, use) => await use(page),

    signUpSteps: async({page}, use) => {
        await use(new SignUpSteps(page));
    },
    signInSteps: async({page}, use) => {
        await use(new SignInSteps(page));
    }
})

export default test;