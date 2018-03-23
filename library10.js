//https://www.youtube.com/watch?v=emmt9D_16Sg&index=11&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk
//assertations in web driver
//assert that each step is true
//uses node assertion library on nodejs website
var webdriver = require('selenium-webdriver'),
    { describe, it, after, before } = require('selenium-webdriver/testing');
	By = webdriver.By,
	assert = require('assert'),
	until = webdriver.until;
	var driver;
	var find;

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
			return submitBtn.getCssValue('opacity').then(function(result){
				assert(result === '1'); //truthy not strict t/f could be result === '1'
			})
		});

		it('submitting email shows an alert', function(){
			var submitBtn = driver.findElement(By.css('.btn-lg'));
			driver.findElement(By.css('input')).sendKeys('user@email.com');

			submitBtn.click();

			driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
			driver.findElements(By.css('.alert-success')).then(function(result){ //findELEMENTS instead of findELEMENT
				//assert(result.length === 1, result.length + ' alert successes were found');//assert that there is an alert, shows msg if there is an error
				assert.equal(result.length, 1);
			});
		});

		it('shows a navbar', function(){
			driver.findElements(By.css('nav')).getText().then(function(result){
				assert.equal(result.length, 1);
			});
		});		
	});

	
	