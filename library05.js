//https://www.youtube.com/watch?v=Yvbu1klquFY&index=6&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk
//implicit wait
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser('chrome').build();

	driver.get('http://library-app.firebaseapp.com');
	driver.manage().timeouts().implicitlyWait(5000); //only allow wait for 1 thing
	driver.findElement(By.css('input')).sendKeys('user@email.com');
	driver.findElement(By.css('.btn-lg')).click();
	driver.findElement(By.css('.alert-success')).getText().then(function(txt){
		console.log('alert success text is ' + txt);
	});

	driver.quit();