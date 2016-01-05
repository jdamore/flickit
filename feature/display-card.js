var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
const mochaTimeOut = 10000; //ms
 
test.describe('Display Card', function() {

  this.timeout(mochaTimeOut);

  test.it('shows the card', function () {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
    driver.get('http://flipit.corsamore.com');
    driver.isElementPresent(webdriver.By.name('card')).then(function(present) {
      assert.equal(present, true, "Card not displayed");
    });
    driver.quit();
  });
});