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

  test.it('shows the expected word when drawn', function () {
    driver.get(config.url+'?lexicon=lo');
    var card = driver.findElement(webdriver.By.id('card-consectetuer'));
    card.click();
    driver.findElement(webdriver.By.id('word-consectetuer')).getText().then(function(word) {
      assert.equal(word, 'consectetuer', "Card showing '" + word + "'' instead of the expected word 'consectetuer'");
    });
  });

  test.it('shows the expected score and the word when flipped', function () {
    driver.get(config.url+'?lexicon=lo');
    var card = driver.findElement(webdriver.By.id('card-consectetuer'));
    card.click();
    card.click();
    driver.findElement(webdriver.By.id('score-consectetuer')).getText().then(function(score) {
      assert.equal(score, '42\nconsectetuer', "Card showing '" + score + "'' instead of the expected score '12'");
    });
  });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});