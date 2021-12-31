import { Page, Locator } from "@playwright/test";

export class MainPage {
    readonly page: Page;

    readonly headerHomeButton: Locator;
    readonly headerSignInButton: Locator;
    readonly headerSignUpButton: Locator;

    readonly yourFeedTab: Locator;
    readonly globalFeedTab: Locator;

    readonly articlePreviewElement: string;
    readonly articlePreviewLocator: string;

    readonly articleAuthor: string;
    readonly articleHeartsButton: string;

    readonly articleLink: string;
    readonly articleTitle: string;
    readonly articleDescription: string;
    readonly articleTags: string;

    constructor(page: Page) {
        this.page = page;
        this.headerHomeButton = page.locator("a:has-text('Home')");
        this.headerSignInButton = page.locator("a:has-text('Sign in')");
        this.headerSignUpButton = page.locator("a:has-text('Sign up')");

        this.yourFeedTab = page.locator("a:has-text('Your Feed')");
        this.globalFeedTab = page.locator("a:has-text('Global Feed')");

        this.articlePreviewElement = "app-article-preview >> nth={}";
        this.articleAuthor = "a.author";
        this.articleHeartsButton = "app-favorite-button button";

        this.articleLink = "a.preview-link";
        this.articleTitle = "h1";
        this.articleDescription = "p";
        this.articleTags = "ul li";
    }

    async getArcticle(index: number = 1): Promise<Locator> {
        return this.page.locator(this.articlePreviewElement.replace("{}", index.toString()))
    }

    async getArticleAuthor(index: number = 1): Promise<string> {
        return (await this.getArcticle(index)).locator(this.articleAuthor).innerText();
    }

    async clickArticleHearsButton(index: number = 1): Promise<void> {
        (await this.getArcticle(index)).locator(this.articleHeartsButton).click();
    }

    async getArticleLink(index: number = 1): Promise<Locator> {
        return (await this.getArcticle(index)).locator(this.articleLink);
    }

    async getArticleTitle(index: number = 1): Promise<string> {
        return (await this.getArticleLink(index)).locator(this.articleTitle).innerText();
    }

    async getArticleDescription(index: number = 1): Promise<string> {
        return (await this.getArticleLink(index)).locator(this.articleDescription).innerText();
    }

    async getArticleTags(index: number = 1): Promise<string[]> {
        return (await this.getArticleLink(index)).locator(this.articleTags).allInnerTexts();
    }

    async clickHeaderHomeButton(): Promise<void> {
        await this.headerHomeButton.click();
    }

    async clickHeaderSignInButton(): Promise<void> {
        await this.headerSignInButton.click();
    }

    async clickHeaderSignupButton(): Promise<void> {
        await this.headerSignUpButton.click();
    }

}