var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/libraries_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);



describe('library app scenarios: library listing', function(){
	this.timeout(50000);

	beforeEach(function(){
		page = new Page();
		page.visit('https://library-app.firebaseapp.com/libraries');
	});

	afterEach(function(){
		page.quit();
	});

	it('should list libraries', function(){
		var libraries = page.listLibraries();
		libraries.should.eventually.have.length.above(1);
	});

	it('should be able to add a new library', function(){
		var addLibrary = page.addLibrary();
		addLibrary.libraryList.should.eventually.contain(addLibrary.libraryName);
	});

	it('should be able to sort libraries', function(){
		var libraries = page.filterLibraries();
		libraries.libraryList.should.eventually.contain(libraries.newLibrary);
	});		
});

	
	