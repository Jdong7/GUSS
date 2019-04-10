const assert = require("assert");
const puppeteer = require("puppeteer");

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("https://mighty-woodland-80177.herokuapp.com/");
});

afterEach(async () => {
  await browser.close();
});

test("opens up homepage", async () => {
  const url = await page.url();
  assert(url === "https://mighty-woodland-80177.herokuapp.com/");
});

test("clicking start story button takes to page1", async () => {
  await page.click(".btn_1");
  const url = await page.url();
  assert(url === "https://mighty-woodland-80177.herokuapp.com/Page1");
});

test("clicking skip pages button takes nowhere", async () => {
  await page.click(".btn_2");
  const url = await page.url();
  assert(url === "https://mighty-woodland-80177.herokuapp.com/");
});

test("clicking About button takes to about page", async () => {
  await page.click(".btn_3");
  const url = await page.url();
  assert(url === "https://mighty-woodland-80177.herokuapp.com/About");
});

test("clicking help button takes to help page", async () => {
  await page.click(".btn_4");
  const url = await page.url();
  assert(url === "https://mighty-woodland-80177.herokuapp.com/Help");
});
