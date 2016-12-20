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
    var card = driver.findElement(webdriver.By.id('card-loremipsum'));
    card.click();
    driver.findElement(webdriver.By.id('word-loremipsum')).getText().then(function(word) {
      assert.equal(word, 'loremipsum', "Card showing '" + word + "'' instead of the expected word 'loremipsum'");
    });
  });

  test.it('shows the expected score when flipped', function () {
    driver.get(config.url+'?lexicon=lo');
    var card = driver.findElement(webdriver.By.id('card-loremipsum'));
    card.click();
    card.click();
    driver.findElement(webdriver.By.id('score-loremipsum')).getText().then(function(score) {
      assert.equal(score, '12', "Card showing '" + score + "'' instead of the expected score '12'");
    });
  });

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
  driver.quit();
});