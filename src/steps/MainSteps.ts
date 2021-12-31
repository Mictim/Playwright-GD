import { Page } from "@playwright/test";
import { MainPage } from '../pages/MainPage';
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";


export class MainSteps {
    readonly page: Page;
    readonly mainPage: MainPage; 
    
    constructor(page: Page) {
        this.page = page;
        this.mainPage = new MainPage(this.page); 
    }

    async openHomePage(): Promise<MainPage> {
        await this.mainPage.clickHeaderHomeButton();
        return this.mainPage;
    }

    async openSignUpPage(): Promise<SignUpPage> {
        await this.mainPage.clickHeaderSignupButton();
        return new SignUpPage(this.page);
    }

    async openSignInPage(): Promise<SignInPage> {
        await this.mainPage.clickHeaderSignInButton();
        return new SignInPage(this.page);
    }
}