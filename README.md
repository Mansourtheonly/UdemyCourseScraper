# Udemy Course Scraper

A simple tool to scrape all your enrolled Udemy course names and save them to a CSV file.

---

## Features
- Scrapes course names from your Udemy "My Learning" page.
- Saves the data to a CSV file (`courses.csv`).
- Allows you to stop the script manually (`Ctrl+C`) and still save the collected data.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Google Chrome](https://www.google.com/chrome/) (for Puppeteer to work)

---

## Installation
1. Clone this repository or download the script:
   ```bash
   git clone https://github.com/Mansourtheonly/UdemyCourseScraper.git
Navigate to the project folder:

bash
Copy
cd UdemyCourseScraper
Install the dependencies:

bash
Copy
npm install
Usage
Start Chrome with remote debugging enabled:

bash
Copy
chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\path\to\chrome-profile"
Replace C:\path\to\chrome-profile with a directory where Chrome can store its profile data.

Run the script:

bash
Copy
npm start
Log in to Udemy manually when prompted.

The script will start scraping your course names. You can stop it at any time by pressing Ctrl+C. The collected data will be saved to courses.csv.

Output
The script will generate a courses.csv file containing all the scraped course names. Example:

Copy
Learn Python from a University Professor
Laravel - Build Realtime Messaging App From Scratch (2024)
Complete Digital Marketing Course: Paid Ads, SEO, GA4, GTM
Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Disclaimer
This tool is for educational purposes only. Use it responsibly and respect Udemy's terms of service.

Copy

---

### **How to Use This README**
1. Create a new file in your project folder named `README.md`.
2. Copy and paste the above content into the file.
3. Save the file.

---

### **Optional: Add a License File**
If you want to include a license, create a file named `LICENSE` in your project folder and paste the following content:

#### **LICENSE**
```text
MIT License

Copyright (c) 2023 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
