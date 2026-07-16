import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1,

 reporter: [
    ['list'],
    ['html', { open: 'always' }],
    ['json', { outputFile: 'reports/report.json' }],
    ['junit', { outputFile: 'reports/results.xml' }]
],

  use: {

    baseURL: 'https://www.redbus.in/',

    browserName: 'chromium',

    channel: 'chrome',

    headless: false,

    viewport: {
      width: 1536,
      height: 864
    },

    ignoreHTTPSErrors: true,

    actionTimeout: 10000,

    navigationTimeout: 30000,

    screenshot: 'on',

    video: 'on',

    trace: 'on'

  },

  projects: [

    {
      name: 'Google Chrome',

      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome'
      }

    }

  ],

  timeout: 60000,

  expect: {
    timeout: 10000
  },

  outputDir: 'test-results'

});