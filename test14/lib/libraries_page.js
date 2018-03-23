var page = require('./base_page');
var selector = require('../utils/locators');
var libraryItem = selector.libraryItem;
var libraryName = selector.nameInput;
var libraryAddress = selector.addressInput;
var libraryPhone = selector.phoneInput;
var createBtn = selector.createBtn;
var libraryContainer = selector.libraryContainer;


//list libraries
page.prototype.listLibraries = function(){
	return this.findAll(libraryItem);
}

//add library
page.prototype.addLibrary = function(desiredName){
	var fakeLibraryName = (desiredName) ? desiredName : this.fake().libraryName;
	var fakeLibraryAddress = this.fake().address;
	var fakeLibraryPhone = this.fake().phone;

	this.findLink('Add new').click();
	this.write(libraryName, fakeLibraryName);
	this.write(libraryAddress, fakeLibraryAddress);
	this.write(libraryPhone, fakeLibraryPhone);
	this.find(createBtn).click();

	return{
		libraryList: this.find(libraryContainer).getText(),
		libraryName: fakeLibraryName
	}
}

//sort libraries
page.prototype.filterLibraries = function(){
	var newLibrary = this.fake().libraryName;

	this.addLibrary(newLibrary);
	this.write(selector.inputfilter, newLibrary);

	return{
		libraryList: this.find(libraryContainer).getText(),
		newLibrary: newLibrary
	}
}



module.exports = page;