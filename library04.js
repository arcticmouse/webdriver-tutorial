//https://www.youtube.com/watch?v=ojOWHsenWNM&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk&index=5
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser('chrome').build();

	driver.get('http://library-app.firebaseapp.com');

	driver.findElement(By.css('input')).sendKeys('user@email.com');
	driver.findElement(By.css('.btn-lg')).click();
	driver.sleep(1000); //bad practice in real word tests just for debug wait times
	driver.findElement(By.css('.alert-success')).getText().then(function(txt){
		console.log('alert success text is ' + txt);
	});

	driver.quit();