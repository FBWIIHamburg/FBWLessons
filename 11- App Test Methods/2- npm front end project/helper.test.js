const {textGenerator, validator, checkAll} = require('./helper');
const puppeteer = require('puppeteer');

test('should return element with a content', ()=>{
const text = textGenerator('Ahmad', 33);
expect(text).toBe('Ahmad ( 33 years old )');

const text2 = textGenerator('Ali', 33);
expect(text2).toBe('Ali ( 33 years old )');

const text3 = textGenerator('amir', 33);
expect(text3).toBe('amir ( 33 years old )');
});

test('should return true or false',()=>{
    const check = validator(' ',false, true);
    expect(check).toBe(false);
});
test('should return false or true',()=>{
    const check = checkAll(' ', 22);
    expect(check).toBe(false);

    const check2 = checkAll('Ahmad', '');
    expect(check2).toBe(false);

    
    const check3 = checkAll('Ahmad', '33');
    expect(check3).toBe(true);

});
test('should create an element after entering right data and click the button', async ()=>{
const browser = await puppeteer.launch({
headless: false,
slowMo: 200,
args: ['--window-size=1920,1080']
});
const page = await browser.newPage();
await page.goto('http://127.0.0.1:5501/index.html');
await page.click('input#name');
await page.type('input#name', 'Ahmad');
await page.click('input#age');
await page.type('input#age', '33');
await page.click('button#btnAddUser');

const finalText =await page.$eval('.user-item', el =>el.textContent);
expect(finalText).toBe('Ahmad ( 33 years old)');
await page.close();
},20000);
