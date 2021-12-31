import { Page, test } from "@playwright/test";
import { User } from "../dto/User";
import { SignInPage } from "../pages/SignInPage";
import { MainSteps } from "./MainSteps";

export class SignInSteps {
    readonly page: Page;
    readonly mainSteps: MainSteps;
    readonly signInPage: SignInPage;

    constructor(page: Page) {
        this.page = page;
        this.mainSteps = new MainSteps(page);
        this.signInPage = new SignInPage(page);
    }

    async openSignInPageStep(): Promise<void> {
        await test.step("Open Sign In Page", async () => {
            await this.mainSteps.openSignInPage();
        });  
    }

    async completeLoginStep(user: User): Promise<void> {
        await test.step(`Login as ${user.getEmail()}`, async() => {
            await this.signInPage.setEmail(user.getEmail());
            await this.signInPage.setPassword(user.getPassword());
            const [response] = await Promise.all([
                this.page.waitForResponse('https://api.realworld.io/api/users/login'),
                this.signInPage.clickCompleteButton(),
            ]);
            const buffer: Buffer = Buffer.from(JSON.stringify(await response.json()));
            test.info().attachments.push({name: "User Info", path: "user.json",  body: buffer, contentType: "application/json"});
        })
        
    }

}