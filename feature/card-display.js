var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('config');
 
var driver;
const mochaTimeOut = 10000;

test.before(function() {
  this.timeout(mochaTimeOut);
  driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
  url= config.url;
});
 
test.describe('Display Card', function() {

  this.timeout(mochaTimeOut);

  test.it('shows the card', function () {
    driver.get(config.url+'?lexicon=lo');
    driver.isElementPresent(webdriver.By.name('card')).then(function(present) {
      assert.equal(present, true, "Card not displayed");
    });
  });

  test.it('shows the expected word', function () {
    driver.get(config.url+'?lexicon=lo');
    driver.findElement(webdriver.By.name('front')).getText().then(function(text) {
      assert.equal(text, 'loremipsum', "Card showing '" + text + "'' instead of the expected 'loremipsum'");
    });
  });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});