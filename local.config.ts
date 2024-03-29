import { PlaywrightTestConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {

  testMatch: [
    'tests/**.spec.ts'],
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

  quiet: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: 0,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 2 : undefined,
  workers : 3,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['html', {  outputFolder: 'test-results/html-report',
                open: "on-failure" }]
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 10000,

    /* Base URL to use in actions like `await page.goto('/')`. 
    */
    baseURL: 'https://angular.realworld.io',

    /*
      Geolocation
    */
    locale: 'en-GB',
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    timezoneId: "America/New_York",
    permissions: ['geolocation'],

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',

      /* Project-specific settings. */
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'playwright-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};
export default config;
