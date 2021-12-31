import { Page, test } from "@playwright/test";
import { MainSteps } from '../steps/MainSteps';
import { SignUpPage } from '../pages/SignUpPage';
import { User } from "../dto/User";

export class SignUpSteps {
    readonly page: Page;
    readonly mainSteps: MainSteps;
    readonly signUpPage: SignUpPage;

    constructor(page: Page) {
        this.page = page;
        this.mainSteps = new MainSteps(page);
        this.signUpPage = new SignUpPage(page);
    }

    async openSignUpPageStep(): Promise<void> {
        await test.step("Open Sign Up Page", async () => {
            await this.mainSteps.openSignUpPage();
        });
        
    }

    async completeNewUserCreationStep(user: User): Promise<void> {
        await test.step("Enter new User Credentials", async() => {
            await this.signUpPage.setUsername(user.getUsername());
            await this.signUpPage.setEmail(user.getEmail());
            await this.signUpPage.setPassword(user.getPassword());
            const [response] = await Promise.all([
                this.page.waitForResponse('https://api.realworld.io/api/users'),
                this.signUpPage.clickCompleteButton(),
            ]);
            const buffer: Buffer = Buffer.from(JSON.stringify(await response.json()));
            test.info().attachments.push({name: "User Info", path: "user.json",  body: buffer, contentType: "application/json"});
        })
    }

}