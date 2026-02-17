import { test, expect } from '@playwright/test';

/// AAA - Arrange, Act, Assert

test('deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  // Act
  //await page.getByTestId('search-order-id').fill('VLO-U903B1');
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-U903B1');
  await page.getByTestId('search-order-button').click();

  // Assert

  await expect(page.locator('//p[(text()="VLO-U903B1")]')).toBeVisible();
  await expect(page.locator('//p[(text()="VLO-U903B1")]')).toContainText('VLO-U903B1');

  await expect(page.locator('//div[(text()="APROVADO")]')).toBeVisible();
  await expect(page.locator('//div[(text()="APROVADO")]')).toContainText('APROVADO');
  
  
  /*await expect(page.getByTestId('order-result-VLO-U903B1')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-U903B1')).toContainText('VLO-U903B1');
  await expect(page.getByTestId('order-result-VLO-U903B1')).toBeVisible();
  await expect(page.getByTestId('order-result-VLO-U903B1')).toContainText('APROVADO');
  */



});
