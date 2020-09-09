const puppeteer = require('puppeteer');

async function rastreioNotebook() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const rastreioNotebook = `http://app.cargobr.com/Rastreamentos/Rastreamento`;

  await page.goto(rastreioNotebook);

  await page.evaluate(() => {
    const nroBusca = document.querySelector('#nroBusca');
    nroBusca.value = '40364294850';
  });

  await page.evaluate(() => {
    const btnRastrear = document.querySelector('.link-loading');
    btnRastrear.click();
  });

  await page.waitFor(2000);

  await page.screenshot({ path: 'C:/Users/gustavo.henrique/Desktop/rastreio/rastreio.png', fullPage: true });

  await browser.close();
}

rastreioNotebook();
