<<<<<<< HEAD
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = express();
require('chromedriver');
const swd = require('selenium-webdriver');

const tab = new swd.Builder().forBrowser('chrome').build();
const Opentab = tab.get('website link for login page');
    //example: const Opentab = tab.get('https://github.com/');

Opentab
.then(()=>tab.manage().setTimeouts({implicit:10000}))
.then(()=> tab.findElement(swd.By.xpath("give username xpath here")))
.then ((username)=> username.sendKeys(process.env.ROLLNO))
.then(()=> tab.findElement(swd.By.xpath("give password xpath here")))
.then ((password)=> password.sendKeys(process.env.PASSWORD))
.then(()=> tab.findElement(swd.By.xpath("give login button xpath here")))
.then((logIn)=>logIn.click())
            // add more steps if your website needs it
.then(()=>tab.close())
.then(()=>{
    console.log("The automation is successful");
    setTimeout(()=> process.exit(0),2000);
})


.catch((err)=>{
    tab.close();
    console.log(err);
    console.log("The automation was unsuccessful");
    setTimeout(()=> process.exit(1),2000);
})

app.listen(8000,()=>{
    console.log("server is running")
=======
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = express();
require('chromedriver');
const swd = require('selenium-webdriver');

const tab = new swd.Builder().forBrowser('chrome').build();
const Opentab = tab.get('website link for login page');
    //example: const Opentab = tab.get('https://github.com/');

Opentab
.then(()=>tab.manage().setTimeouts({implicit:10000}))
.then(()=> tab.findElement(swd.By.xpath("give username xpath here")))
.then ((username)=> username.sendKeys(process.env.ROLLNO))
.then(()=> tab.findElement(swd.By.xpath("give password xpath here")))
.then ((password)=> password.sendKeys(process.env.PASSWORD))
.then(()=> tab.findElement(swd.By.xpath("give login button xpath here")))
.then((logIn)=>logIn.click())
            // add more steps if your website needs it
.then(()=>tab.close())
.then(()=>{
    console.log("The automation is successful");
    setTimeout(()=> process.exit(0),2000);
})


.catch((err)=>{
    tab.close();
    console.log(err);
    console.log("The automation was unsuccessful");
    setTimeout(()=> process.exit(1),2000);
})

app.listen(8000,()=>{
    console.log("server is running")
>>>>>>> bf48e58 (windows -> wsl)
})