//https://www.youtube.com/watch?v=OotC0XwUWuo&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk&index=10
//using mochawesome
var webdriver = require('selenium-webdriver'),
    { describe, it, after, before } = require('selenium-webdriver/testing');
	By = webdriver.By,
	until = webdriver.until;
	var driver;

	describe('library app scenarios', function(){
		this.timeout(50000);
		beforeEach(function(){
			//fresh browser for each test to test everything individually
			driver = new webdriver.Builder().forBrowser('chrome').build();
			driver.get('http://library-app.firebaseapp.com');
		});

		afterEach(function(){
			driver.quit();
		});

		it('changes button opacity upon email being filled out', function(){
			var submitBtn = driver.findElement(By.css('.btn-lg'));
			driver.findElement(By.css('input')).sendKeys('user@email.com');

			//has to return a T/F boolean
			driver.wait(function(){
				return submitBtn.getCssValue('opacity').then(function(result){
					return result == 1; //truthy not strict t/f could be result === '1'
				})
			}, 5000);
		});

		it('works with mocha', function(){
			var submitBtn = driver.findElement(By.css('.btn-lg'));
			driver.findElement(By.css('input')).sendKeys('user@email.com');

			submitBtn.click();

			driver.wait(until.elementLocated(By.css('.alert-success')), 5000).getText().then(function(txt){
				console.log('alert success text is ' + txt);
			});
		});

		it('works with mocha', function(){
			driver.findElement(By.css('nav')).getText().then(function(txt){
				console.log(txt);
			});
		});		
	});

	
	