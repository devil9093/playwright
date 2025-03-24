import { test, expect } from '@playwright/test';
import { textboxLoc,todoCountLoc,checkBoxLoc,completedCountLoc,destroyButtonLoc } from '../utility/locator.json';

test.describe('practice test', () => {
  test.beforeEach('open base url',async ({ page }) => {
    await page.goto('http://localhost:8080');
  });

  test('add todo items', async ({ page }) => {
    await page.fill(textboxLoc, 'Test Todo 1');
    await page.press(textboxLoc, 'Enter');
    const todoCount = await page.locator(todoCountLoc).count();
    expect(todoCount).toBe(1);
  });

  test('mark todo items as complete', async ({ page }) => {
    await page.fill(textboxLoc, 'Test Todo 1');
    await page.press(textboxLoc, 'Enter');
    await page.click(checkBoxLoc);
    await page.waitForSelector(completedCountLoc, {timeout: 10000})
    await page.locator(completedCountLoc).isVisible();
  });
  
  test('mark todo items as complete then again mark as not complete', async ({ page }) => {
    await page.fill(textboxLoc, 'Test Todo 1');
    await page.press(textboxLoc, 'Enter');
    await page.click(checkBoxLoc);
    await page.waitForSelector(completedCountLoc, {timeout: 10000})
    await page.locator(completedCountLoc).isVisible();
    await page.click(checkBoxLoc);
    const todoCount = await page.locator(todoCountLoc).count();
    expect(todoCount).toBe(1);
  });

  test('delete items', async ({ page }) => {
    await page.fill(textboxLoc, 'Test Todo 1');
    await page.press(textboxLoc, 'Enter');
    await page.hover(todoCountLoc);
    await page.click(destroyButtonLoc);
    const todoCount = await page.locator(todoCountLoc).count();
    expect(todoCount).toBe(0);
  });
});