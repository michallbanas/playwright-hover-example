import { test } from '@playwright/test';

test.beforeEach(async ({ page, context }) => {
  await context.addCookies([
    {
      name: "__kwc_agreed",
      value: "true",
      domain: ".kiwi.com",
      path: "/",
    },
    {
      name: "__kwc_settings",
      value: "{%22analytics%22:true%2C%22marketing%22:true}",
      domain: ".kiwi.com",
      path: "/",
    },
  ])

  await page.goto("/en/search/results/vienna-austria/oslo-norway/2024-07-11/no-return?sortBy=price")
})

test("HOVER", async ({ page }) => {
  const firstResultCard = page.getByTestId("ResultCardWrapper").first()
  await firstResultCard.waitFor({ state: "visible" })
  await firstResultCard.hover()
})

