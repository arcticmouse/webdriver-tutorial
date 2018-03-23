var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
	By = webdriver.By,
	until = webdriver.until,
	Key = webdriver.Key;

var o = new chrome.Options();
//o.addArguments('start-fullscreen');
o.addArguments('disable-infobars')	;
o.addArguments('headless');
o.setUserPreferences( {credentials_enable_service: false } );

var fake = require('../utils/fake_data')	

var Page = function(){
	this.driver = new webdriver.Builder().setChromeOptions(o).forBrowser('chrome').build();
	var driver = this.driver;
	this.fake = fake;

	this.visit = function(theUrl){
		return driver.get(theUrl);
	}

	this.quit = function(){
		return driver.quit();
	}

	this.find = function(el){
		driver.wait(until.elementLocated(By.css(el)), 5000);
		return driver.findElement(By.css(el));
	}

	this.findLink = function(el){
		driver.wait(until.elementLocated(By.linkText(el)), 15000);
		return driver.findElement(By.linkText(el));
	}

	this.findAll = function(el){
		driver.wait(until.elementLocated(By.css(el)), 5000);
		return driver.findElements(By.css(el));
	}

	this.write = function(el, txt){
		return this.find(el).sendKeys(txt);
	}
}

module.exports = Page;