var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
var driver;
const mochaTimeOut = 10000;

test.before(function() {
  this.timeout(mochaTimeOut);
  driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
});
 
test.describe('Display Card', function() {

  this.timeout(mochaTimeOut);

  test.it('shows the card', function () {
    driver.get('http://flipit.corsamore.com');
    driver.isElementPresent(webdriver.By.name('card')).then(function(present) {
      assert.equal(present, true, "Card not displayed");
    });
  });

  test.it('shows the expected word', function () {
    driver.get('http://flipit.corsamore.com');
    driver.findElement(webdriver.By.name('card')).getText().then(function(text) {
      assert.equal(text, 'Sapin de Noel', "Card not showing the right word");
    });
  });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});
