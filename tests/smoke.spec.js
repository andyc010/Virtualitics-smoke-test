const { test, expect } = require('@playwright/test');

/**
 * Purpose:
 * 1) Showcase experience in automated testing
 * 2) Provide a quick test on the website to ensure the webpages are present for visitors to see
 */

/** Smoke test for certain pages:
 * 1. Home page: https://virtualitics.com
 * 2. AI Platform: https://virtualitics.com/ready-to-use-ai/
 * 3. Industries
 *  a. Life Sciences: https://virtualitics.com/life-sciences/
 *  b. Industry 4.0: https://virtualitics.com/industry-4-0/
 *  c. Financial Services: https://virtualitics.com/financial-services/
 *  d. Federal: https://virtualitics.com/federal-2/
 * 4. About Us
 *  a. News: https://virtualitics.com/news/
 *  b. Leadership: https://virtualitics.com/leadership/
 *  c. Careers: https://virtualitics.com/careers/
 *  d. Contact Us: https://virtualitics.com/contact-us/
 * 5. Resources
 *  a. Blog: https://blog.virtualitics.com/
 *  b. eBooks and Webinars: https://virtualitics.com/resources
 *  c. Cyber Security Standards: https://virtualitics.com/cyber-security-standards/
 *  d. Documentation: https://docs.virtualitics.com/
 * 6. Miscellaneous
 *  a. Request Demo: https://resources.virtualitics.com/virtualitics-demo-request
 *  b. Job Openings (Breezy): https://virtualitics.breezy.hr/
 *  c. Terms of Use: https://virtualitics.com/terms-of-use/
 *  d. Privacy Policy: https://virtualitics.com/privacy-policy-2/
*/

test.describe('Smoke test', () => {
    
    test('Home page', async({ page }) => {
        
        await page.goto('https://virtualitics.com');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Decisions you can trust with AI you can understand').first()).toBeVisible();

    });

    test('AI Platform', async({ page }) => {
        await page.goto('https://virtualitics.com/ready-to-use-ai/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Virtualitics AI Platform').first()).toBeVisible();
    });

    // Industries pages

    test('Industries: Life Sciences', async({ page }) => {
        
        await page.goto('https://virtualitics.com/life-sciences/');
              
        // Expect text specific to the page to appear
        await expect(page.locator('text=Improve patient outcomes and accelerate discovery').first()).toBeVisible();
    });

    test('Industries: Industry 4.0', async({ page }) => {
        await page.goto('https://virtualitics.com/industry-4-0/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Increase agility and eliminate downtime').first()).toBeVisible();
    });

    test('Industries: Financial Services', async({ page }) => {
        await page.goto('https://virtualitics.com/financial-services/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Protect and grow your customers').first()).toBeVisible();
    });

    test('Industries: Federal', async({ page }) => {
        await page.goto('https://virtualitics.com/federal-2/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Be mission-ready with intelligent analysis').first()).toBeVisible();
    });

    // About Us
    
    test('About Us: News', async({ page }) => {
        await page.goto('https://virtualitics.com/news/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Read the latest Virtualitics news').first()).toBeVisible();
    });

    test('About Us: Leadership', async({ page }) => {
        await page.goto('https://virtualitics.com/leadership/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Our Leadership').first()).toBeVisible();
    });

    test('About Us: Careers', async({ page }) => {
        await page.goto('https://virtualitics.com/careers/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Be part of our journey').first()).toBeVisible();
    });

    test('About Us: Contact Us', async({ page }) => {
        await page.goto('https://virtualitics.com/contact-us/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Ready to learn more?').first()).toBeVisible();
    });

    // Resources pages

    test('Resources: Blog', async({ page }) => {
        await page.goto('https://blog.virtualitics.com/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Virtualitics Blog').first()).toBeVisible();
    });

    test('Resources: eBooks and Webinars', async({ page }) => {
        await page.goto('https://virtualitics.com/resources');

        // Expect text specific to the page to appear
        await expect(page.locator('text=eBooks and Webinars').first()).toBeVisible();
    });

    test('Resources: Cyber Security Standards', async({ page }) => {
        await page.goto('https://virtualitics.com/cyber-security-standards/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Our commitment to security').first()).toBeVisible();
    });

    test('Resources: Documentation', async({ page }) => {
        await page.goto('https://docs.virtualitics.com/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Hi! We’re Here to Help').first()).toBeVisible();
    });

    // Miscellaneous pages

    test('Miscellaneious: Request Demo', async({ page }) => {
        await page.goto('https://resources.virtualitics.com/virtualitics-demo-request');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Fill out the form below and our team will reach out to you to schedule a demo.').first()).toBeVisible();
    });

    test('Miscellaneious: Job Openings (Breezy)', async({ page }) => {
        await page.goto('https://virtualitics.breezy.hr/');

        // Expect text specific to the page to appear
        await expect(page.locator('text=We\'re looking for amazing people to join our fast-growing team.').first()).toBeVisible();
    });

    test('Miscellaneious: Terms of Use', async({ page }) => {
        await page.goto('https://virtualitics.com/terms-of-use/');

        await page.click('text=Accept');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Terms of Use').first()).toBeVisible();
    });

    test('Miscellaneious: Privacy Policy', async({ page }) => {
        await page.goto('https://virtualitics.com/privacy-policy-2/');

        await page.click('text=Accept');

        // Expect text specific to the page to appear
        await expect(page.locator('text=Privacy Policy').first()).toBeVisible();
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});