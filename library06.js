//https://www.youtube.com/watch?v=Zj_YFieu6WM&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk&index=7
//explicit wait / webdriver.until
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser('chrome').build();

	driver.get('http://library-app.firebaseapp.com');
	driver.findElement(By.css('input')).sendKeys('user@email.com');
	driver.findElement(By.css('.btn-lg')).click();
	driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
	driver.findElement(By.css('.alert-success')).getText().then(function(txt){
		console.log('alert success text is ' + txt);
	});

	driver.quit();