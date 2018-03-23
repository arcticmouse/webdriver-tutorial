//https://www.youtube.com/watch?v=obv9dU6EK6Q&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk&index=8
//explicit wait for custom condition ... when until does not have the condition i want to use
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser('chrome').build();

	driver.get('http://library-app.firebaseapp.com');

	var submitBtn = driver.findElement(By.css('.btn-lg'));

	driver.findElement(By.css('input')).sendKeys('user@email.com');

	//has to return a T/F boolean
	driver.wait(function(){
		return submitBtn.getCssValue('opacity').then(function(result){
			return result == 1; //truthy not strict t/f could be result === '1'
		})
	}, 15000);

	submitBtn.click();

	driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
		console.log('alert success text is ' + txt);
	});

	driver.quit();