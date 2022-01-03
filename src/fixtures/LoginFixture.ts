import { test as base } from "@playwright/test";
import { SignUpSteps } from "../steps/SignUpSteps";
import { SignInSteps } from '../steps/SignInSteps';

const test = base.extend<{
    signUpSteps: SignUpSteps;
    signInSteps: SignInSteps;
}>({
    page: ({page}, use) => use(page),
    signUpSteps: async({page}, use) => {
        return use(new SignUpSteps(page));
    },
    signInSteps: async({page}, use) => {
        return use(new SignInSteps(page));
    }
})

export default test;