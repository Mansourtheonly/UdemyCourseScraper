const puppeteer = require('puppeteer');
const fs = require('fs');
const readline = require('readline');

(async () => {
  try {
    // Connect to the existing Chrome instance
    const browserURL = 'http://127.0.0.1:9222';
    const browser = await puppeteer.connect({ browserURL });
    const pages = await browser.pages();
    const page = pages[0]; // Use the first open tab

    // Increase the default navigation timeout
    await page.setDefaultNavigationTimeout(60000); // 60 seconds

    await page.goto('https://www.udemy.com/home/my-courses/learning/');

    // Log in manually or automate login here
    console.log('Please log in to Udemy manually...');
    await page.waitForSelector('a[href*="/course-dashboard-redirect/?course_id="]', { timeout: 60000 });

    let courseNames = [];
    let hasNextPage = true;

    // Function to save data to CSV
    const saveData = () => {
      fs.writeFileSync('courses.csv', courseNames.join('\n'), 'utf-8');
      console.log('Data saved to courses.csv');
    };

    // Handle manual stop (Ctrl+C)
    process.on('SIGINT', () => {
      console.log('\nUser interrupted the script. Saving collected data...');
      saveData();
      process.exit(0); // Exit gracefully
    });

    while (hasNextPage) {
      // Extract course names
      const courses = await page.$$eval('a[href*="/course-dashboard-redirect/?course_id="]', elements => elements.map(el => el.textContent.trim()));
      courseNames = courseNames.concat(courses);

      // Save data after each page (optional)
      saveData();
      console.log(`Page scraped. Total courses collected: ${courseNames.length}`);

      // Check for next page
      const nextButton = await page.$('a.pagination-module--next--QX6nm');
      if (nextButton) {
        await nextButton.click();
        await page.waitForSelector('a[href*="/course-dashboard-redirect/?course_id="]', { timeout: 60000 });
      } else {
        hasNextPage = false;
      }
    }

    // Final save (in case the loop exits naturally)
    saveData();
    console.log('Scraping completed. Final data saved to courses.csv');

    await browser.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
})();