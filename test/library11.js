var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('./homepage');
var page;

describe('library app scenarios', function(){
	this.timeout(50000);

	beforeEach(function(){
		page = new Page();
		page.visit('https://library-app.firebaseapp.com/');
	});

	afterEach(function(){
		page.quit();
	});

	it('typing valid email changes opacity to 1', function(){
		var btn = page.requestBtn();
	});

	it('typing a valid email enables request button', function(){
		var btn = page.requestBtn();
	});

	it('clicking request invitation should trigger a confirmation alert', function(){
		//var alert = page.alertSuccess();
	});		
});

	
	