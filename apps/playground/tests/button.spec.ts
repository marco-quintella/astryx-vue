import { test, expect } from '@playwright/test';

test.describe('Astryx Vue — Button playground', () => {
  test('page loads and shows all variant sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Astryx Vue — Button/i })).toBeVisible();
    await expect(page.locator('[data-test="variants"]')).toBeVisible();
    await expect(page.locator('[data-test="sizes"]')).toBeVisible();
    await expect(page.locator('[data-test="colors"]')).toBeVisible();
    await expect(page.locator('[data-test="states"]')).toBeVisible();
    await expect(page.locator('[data-test="icons"]')).toBeVisible();
  });

  test('click counter increments', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('[data-test="counter-btn"]');
    const count = page.locator('[data-test="click-count"]');
    await expect(count).toHaveText('0');
    await btn.click();
    await btn.click();
    await btn.click();
    await expect(count).toHaveText('3');
  });

  test('disabled button cannot be clicked', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('[data-test="click-count"]');
    await expect(counter).toHaveText('0');
    const disabled = page.locator('[data-test="states"] button:has-text("Disabled")');
    await expect(disabled).toBeDisabled();
    await disabled.click({ force: true });
    await expect(counter).toHaveText('0');
  });

  test('all 5 variants render', async ({ page }) => {
    await page.goto('/');
    const variants = ['Solid', 'Soft', 'Outlined', 'Ghost', 'Danger'];
    for (const v of variants) {
      await expect(
        page.locator(`[data-test="variants"] button:has-text("${v}")`),
      ).toBeVisible();
    }
  });

  test('all 3 sizes render', async ({ page }) => {
    await page.goto('/');
    for (const s of ['Small', 'Medium', 'Large']) {
      await expect(
        page.locator(`[data-test="sizes"] button:has-text("${s}")`),
      ).toBeVisible();
    }
  });

  test('button sizes have usable dimensions', async ({ page }) => {
    await page.goto('/');
    const heights = await page.locator('[data-test="sizes"] button').evaluateAll(
      (buttons) => buttons.map((button) => Math.round(button.getBoundingClientRect().height)),
    );
    expect(heights).toEqual([28, 36, 48]);
  });

  test('neutral and danger colors are not silently rendered as accent', async ({ page }) => {
    await page.goto('/');
    const colors = await page.locator('[data-test="colors"] button').evaluateAll((buttons) =>
      buttons.map((button) => ({
        label: button.textContent?.trim(),
        background: getComputedStyle(button).backgroundColor,
      })),
    );
    const accent = colors.find((item) => item.label === 'Accent')?.background;
    const neutral = colors.find((item) => item.label === 'Neutral')?.background;
    const danger = colors.find((item) => item.label === 'Danger')?.background;
    expect(neutral).not.toBe(accent);
    expect(danger).not.toBe(accent);
  });

  test('captures full-page screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: '../../packages/core/verification/screenshots/button-playground.png',
      fullPage: true,
    });
  });
});
