import { test as base } from "@playwright/test";
import { SignUpSteps } from "../steps/SignUpSteps";

const test = base.extend<{
    signUpSteps: SignUpSteps;
}>({
    page: ({page}, use) => use(page),
    signUpSteps: async({page}, use) => {
        return use(new SignUpSteps(page));
    }
})

export default test;