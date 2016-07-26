'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('HMH - Tests', function() {


  it('Test redirect to /', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('Default starting get results', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('Do we have have the 15 elements? ', function() {
		//expect(true).toBe(true);
		let list = element.all(by.css('.thumbnail'));
		expect(list.count()).toBe(15); // test for the 17 elements
    });

  });
  
});
