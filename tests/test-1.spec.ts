import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://allegro.pl/
  await page.goto('https://allegro.pl/');

  // Click text=Ok, zgadzam sięNie zgadzam sięZmieniam zgody
  await page.locator('text=Ok, zgadzam sięNie zgadzam sięZmieniam zgody').click();

  // Select /kategoria/motoryzacja
  await page.locator('[aria-label="Kategoria i opcje wyszukiwania"]').selectOption('/kategoria/motoryzacja');

  // Click [placeholder="czego szukasz\?"]
  await page.locator('[placeholder="czego szukasz\\?"]').click();

  // Fill [placeholder="czego szukasz\?"]
  await page.locator('[placeholder="czego szukasz\\?"]').fill('BMW m3');

  // Click text=bmw m3 Motoryzacja > BMW >> div >> nth=0
  await page.locator('text=bmw m3 Motoryzacja > BMW >> div').first().click();
  await expect(page).toHaveURL('https://allegro.pl/kategoria/osobowe-bmw-4032?string=bmw%20m3');

  // Click img[alt="BMW M3 COUPE 3\.2 I 343 KM"]
  await page.locator('img[alt="BMW M3 COUPE 3.2 I 343 KM"]').click();
  await expect(page).toHaveURL('https://allegro.pl/ogloszenie/bmw-m3-coupe-3-2-i-343-km-11493825415');

  // Click [aria-label="Pokaż cały numer telefonu"]
  await page.locator('[aria-label="Pokaż cały numer telefonu"]').click();
  await expect(page.locator('div.mpof_vs.mupj_5k a')).toHaveText('+48 600 243 324');

});