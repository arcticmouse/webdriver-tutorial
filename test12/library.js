//https://www.youtube.com/watch?v=1RtTzfQM0wI&list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk&index=13
//using chai with webdriver js
var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('./homepage');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);



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
		btn.opacity.should.eventually.equal('1');
	});

	it('typing a valid email enables request button', function(){
		var btn = page.requestBtn();
		btn.state.should.eventually.be.true;
	});

	it('clicking request invitation should trigger a confirmation alert', function(){
		var alert = page.alertSuccess();
		alert.should.eventually.contain('Thank you!');
	});		
});

	
	