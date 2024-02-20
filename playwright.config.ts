// @ts-check
const { devices } = require("@playwright/test")

const config = {
  testDir: "./playwright",
  timeout: 30 * 1000,
  expect: {

    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "always" }]],
  use: {
    actionTimeout: 0,
    baseURL: "https://kiwi.com",
    trace: "on-first-retry",
    testIdAttribute: "data-test",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
}

module.exports = config
