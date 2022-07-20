<<<<<<< HEAD
const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express()
require("chromedriver");
const swd = require("selenium-webdriver");

const tab = new swd.Builder().forBrowser("chrome").build();
const Opentab = tab.get("https://netaccess.iitm.ac.in/");
Opentab
    // .then(async () => {
    //     await tab.wait(swd.until.alertIsPresent())
    //     let alert = await driver.switchTo().alert()
    //     let alertText = await alert.sendKeys(process.env.ROLLNO);
    //     return alertText
    // })
    .then(() => tab.manage().setTimeouts({ implicit: 10000 }))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/form/div[1]/input')))
    .then((usernameBox) => usernameBox.sendKeys(process.env.ROLLNO))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/form/div[2]/input')))
    .then((passwordBox) => passwordBox.sendKeys(process.env.PASSWORD))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('//*[@id="submit"]')))
    .then((signInBtn) => signInBtn.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/div[2]/a')))
    .then((approveBtn) => approveBtn.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/form/div[2]/label/input')))
    .then((oneHr) => oneHr.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/form/div[4]/button')))
    .then((oneHr) => oneHr.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.close())
    .then(() => {
        console.log("Automation has been done successfully :)")
        setTimeout(() => process.exit(0), 2000)
    })
    .catch((err) => {
        tab.close()
        console.log(err)
        console.log("Some Error has occured :( ")
        setTimeout(() => process.exit(1), 2000)
    });

app.listen(7000, () => {
    console.log("server is running")
=======
const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express()
require("chromedriver");
const swd = require("selenium-webdriver");

const tab = new swd.Builder().forBrowser("chrome").build();
const Opentab = tab.get("https://netaccess.iitm.ac.in/");
Opentab
    // .then(async () => {
    //     await tab.wait(swd.until.alertIsPresent())
    //     let alert = await driver.switchTo().alert()
    //     let alertText = await alert.sendKeys(process.env.ROLLNO);
    //     return alertText
    // })
    .then(() => tab.manage().setTimeouts({ implicit: 10000 }))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/form/div[1]/input')))
    .then((usernameBox) => usernameBox.sendKeys(process.env.ROLLNO))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/form/div[2]/input')))
    .then((passwordBox) => passwordBox.sendKeys(process.env.PASSWORD))
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('//*[@id="submit"]')))
    .then((signInBtn) => signInBtn.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/div[2]/a')))
    .then((approveBtn) => approveBtn.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/form/div[2]/label/input')))
    .then((oneHr) => oneHr.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.findElement(swd.By.xpath('/html/body/div[2]/div/div[1]/form/div[4]/button')))
    .then((oneHr) => oneHr.click())
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => { for (var i = 0; i < 1000000000; i++); })
    .then(() => tab.close())
    .then(() => {
        console.log("Automation has been done successfully :)")
        setTimeout(() => process.exit(0), 2000)
    })
    .catch((err) => {
        tab.close()
        console.log(err)
        console.log("Some Error has occured :( ")
        setTimeout(() => process.exit(1), 2000)
    });

app.listen(7000, () => {
    console.log("server is running")
>>>>>>> bf48e58 (windows -> wsl)
})