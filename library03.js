//https://www.youtube.com/watch?v=C6qQojzN7bE
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser('chrome').build();

	driver.get('http://library-app.firebaseapp.com');

	driver.findElement(By.css('input')).sendKeys('user@email.com');
	driver.findElement(By.css('.btn-lg')).click();
	driver.findElement(By.css('.alert-success')).getText().then(function(txt){
		console.log('alert success text is ' + txt);
	});

	driver.quit();