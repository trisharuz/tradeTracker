import { test, expect } from '@playwright/test';

    test('Download Brochure', async ({ page }) => {
        await page.goto('https://tradetracker.com/gb');
        try {
        await page.click('[data-hide-elements="tt-locale-article-container-warning"]');
        } catch (error) {
        console.error("The element doesn't exist:", error);
        }

        await page.goto('https://tradetracker.com/gb/advertisers');
        
        await page.click('#advbrochure');
        expect (page.url()).toContain('https://merchant.tradetracker.com/portal/advertiserBrochure?loc=en_GB');
        await page.fill('#firstName', 'testfirstname');
        await page.fill('#lastName', 'testlastname');
        await page.fill('#companyName', 'testcompanyname');
        await page.fill('#siteURL', 'test.com');
        await page.locator('[class="radio-icon female"]').click();
        await page.fill('#phone', '12345678901');
        await page.fill('#email', 'test@gmail.com');
        await page.fill('#emailConfirm', 'test@gmail.com');
        /*
        await page.click('#download');
        const downloadedFilePath = await page.waitForEvent('download');
        expect(downloadedFilePath).not.toBeNull();
        const fileContent = fs.readFileSync(downloadedFilePath, 'utf-8');
        expect(fileContent).toContain('Brochure');
        */

        await page.close();
    });

    test('Advertiser Page', async ({ page }) => {
        await page.goto('https://tradetracker.com/gb');
        try {
        await page.click('[data-hide-elements="tt-locale-article-container-warning"]');
        } catch (error) {
        console.error("The element doesn't exist:", error);
        }

        await page.goto('https://tradetracker.com/gb/advertisers');

        const advertisers = await page.locator('#tt-advertisers').first();
        await advertisers.scrollIntoViewIfNeeded();
        expect (advertisers).toBeVisible();

        const advertisersContent = await page.locator('#advertisers-content').first();
        await advertisersContent.scrollIntoViewIfNeeded();
        expect (advertisersContent).toBeVisible();

        const advertisersSteps = await page.locator('.section-advertiser-steps').first();
        await advertisersSteps.scrollIntoViewIfNeeded();
        expect (advertisersSteps).toBeVisible();

        const dashboards = await page.locator('#state-of-the-art-dashboards').first();
        await dashboards.scrollIntoViewIfNeeded();
        expect (dashboards).toBeVisible();

        const features = await page.locator('#all-the-features-you-want').first();
        await features.scrollIntoViewIfNeeded();
        expect (features).toBeVisible();

        const realAttribution = await page.locator('#section-real-attribution').first();
        await realAttribution.scrollIntoViewIfNeeded();
        expect (realAttribution).toBeVisible();
        await page.getByText('About Real Attribution').click();
        expect (page.url()).toContain('real-attribution');

        await page.close();
    });

    test('Advertiser User Account Login', async ({ page }) => {
        await page.goto('https://merchant.tradetracker.com/user/login');
        await page.fill('#username', 'testuser');
        await page.fill('#password', 'testpassword');
        await page.click('#submitLogin');
    //  expect(await page.textContent('#login-success-message')).toEqual('Login successful!');

        await page.close();
    });