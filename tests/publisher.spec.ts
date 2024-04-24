import { test, expect } from '@playwright/test';

test('Publisher Page', async ({ page }) => {
    await page.goto('https://tradetracker.com/gb');
    try {
    await page.click('[data-hide-elements="tt-locale-article-container-warning"]');
    } catch (error) {
    console.error("The element doesn't exist:", error);
    }

    await page.goto('https://tradetracker.com/gb/publishers/');

    const advertisers = await page.locator('#tt-publishers').first();
    await advertisers.scrollIntoViewIfNeeded();
    expect (advertisers).toBeVisible();

    const publisherSteps = await page.locator('.section-publisher-steps').first();
    await publisherSteps.scrollIntoViewIfNeeded();
    expect (publisherSteps).toBeVisible();

    const stateInterface = await page.locator('.section-publisher-pre-interface').first();
    await stateInterface.scrollIntoViewIfNeeded();
    expect (stateInterface).toBeVisible();

    const features = await page.locator('.section-publisher-features').first();
    await features.scrollIntoViewIfNeeded();
    expect (features).toBeVisible();

    await page.click('#pubsignupnow');
    expect (page.url()).toContain('https://affiliate.tradetracker.com/signup/step1?loc=en_GB');

    await page.close();
});

test('Publisher Sign Up', async ({ page }) => {
    await page.goto('https://tradetracker.com/gb');
    try {
    await page.click('[data-hide-elements="tt-locale-article-container-warning"]');
    } catch (error) {
    console.error("The element doesn't exist:", error);
    }

    await page.goto('https://tradetracker.com/gb/publishers/');
    await page.click('#pubsignup');
    expect (page.url()).toContain('https://affiliate.tradetracker.com/signup/step1?loc=en_GB');

    await page.fill('#firstName', 'testfirstname');
    await page.fill('#lastName', 'testlastname');
    await page.click('#s2id_country');
    await page.locator('#select2-results-2').getByText('Afghanistan').click();
    await page.locator("#address").first().fill('Test Address');
    await page.locator("#city").first().fill('Test City');
    await page.locator("#zipcode").first().fill('1012');
    await page.fill('#emailAddress', 'test@gmail.com');
    await page.locator('[class="radio-icon female"]').click();
    await page.click('#save');
    expect (page.getByText('Account setup')).toBeVisible();

    await page.fill('#username', 'testusername');
    await page.fill('#password', '1234-Darth');
    await page.fill('#passwordConfirm', '1234-Darth');
    await page.locator("#s2id_level").click()
    await page.locator('#select2-results-2').getByText('Beginner').click();
    await page.click('#s2id_registrationCountry');
    await page.locator("#select2-results-3").getByText('Argentina').click();
    await page.locator('[class="radio-icon personal"]').click();
    await page.click('#save');
    expect (page.getByText('Account information')).toBeVisible();

    await page.fill('#businessName', 'testbusinessname');
    await page.locator("#s2id_marketSegment").click();
    await page.locator('#select2-results-2').getByText('Adult').click();
    await page.click('#s2id_businessType');
    await page.locator("#select2-results-3").getByText('Blogs').click();
    await page.fill('#siteDescription', 'testdescription');
    await page.fill('#siteURL', 'test.com');
    await page.click('#save');
    expect (page.getByText('Verification').first()).toBeVisible();

    await page.fill('#phone', '12345678901');
    await page.locator('.checkbox-inline').click();
    /*
    await page.click('#save');
    expect(await page.textContent('#registration-success-message')).toEqual('Registration successful!');
    */
    await page.close();
});