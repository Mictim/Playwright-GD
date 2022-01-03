import { Page, Locator } from "@playwright/test";
import { SignInPage } from "./SignInPage";

export class SignUpPage extends SignInPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('input[placeholder="Username"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
    }

    async setUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async setPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

}