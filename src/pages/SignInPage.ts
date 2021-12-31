import { Page, Locator } from "@playwright/test";

export class SignInPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[placeholder="Email"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.signButton = page.locator('button:has-text("Sign")');
    }


    async setEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async setPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickCompleteButton(): Promise<void> {
        await this.signButton.click();
    }
}