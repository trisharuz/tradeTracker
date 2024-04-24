import { test, expect } from '@playwright/test';

    test('Home Page', async ({ page }) => {
      await page.goto('https://tradetracker.com/gb/');
      try {
        await page.click('[data-hide-elements="tt-locale-article-container-warning"]');
      } catch (error) {
        console.error("The element doesn't exist:", error);
      }
      await page.waitForLoadState();

      const slides = await page.locator('div [class="tt-slides"]').first();
      await slides.scrollIntoViewIfNeeded();
      expect (slides).toBeVisible();

      const scroll = await page.locator("#section-scroll-to-start").first();
      await scroll.scrollIntoViewIfNeeded();
      expect (scroll).toBeVisible();

      const customers = await page.locator("#section-customers").first();
      await customers.scrollIntoViewIfNeeded();
      expect (customers).toBeVisible();
      
      const statistics = await page.locator("#section-statistics").first();
      await statistics.scrollIntoViewIfNeeded();
      expect (statistics).toBeVisible();

      const industries = await page.locator("#section-industries").first();
      await industries.scrollIntoViewIfNeeded();
      expect (industries).toBeVisible();

      const brands = await page.locator("#section-trusted-by-brands").first();
      await brands.scrollIntoViewIfNeeded();
      expect (brands).toBeVisible();

      const testimonials = await page.locator("#section-testimonials-short").first();
      await testimonials.scrollIntoViewIfNeeded();
      expect (testimonials).toBeVisible();

      const software = await page.locator("#section-software").first();
      await software.scrollIntoViewIfNeeded();
      expect (software).toBeVisible();
      await page.getByText('Advertisers Features').click();
      expect (page.url()).toContain('#advertiser-feature-list');
      await page.goBack();
      await page.getByText('Publisher Features').click();
      expect (page.url()).toContain('#pub-feature-list');
      await page.goBack();

      await page.close();
    });