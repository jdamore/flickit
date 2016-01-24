var assert = require('assert');
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var test = require('selenium-webdriver/testing');
var config = require('config');
 
var driver;
const mochaTimeOut = 10000;

test.before(function() {
  this.timeout(mochaTimeOut);
  driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
  driver.get(config.url);
  this.timeout(mochaTimeOut);
  driver.wait(until.elementLocated(webdriver.By.name('card')), 2000);
  driver.findElement(webdriver.By.name('card')).click();
});
 
describe('Flip Card', function() {

  it('shows the card score', function () {
    driver.findElement(webdriver.By.name('card-back')).getText().then(function(text) {
      assert.equal(text, '5', "Card showing '" + text + "'' instead of the expected score of 5");
    });
  });

  it('increases the user\'s score', function () {
    driver.findElement(webdriver.By.name('score-value')).getText().then(function(text) {
      assert.equal(text, '5', "User score '" + text + "'' instead of the expected score of 5");
    });
  });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});
