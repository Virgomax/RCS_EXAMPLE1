const { Builder, By, until, Key , ActionSequence, TouchSequence , WebDriver} = require('selenium-webdriver');
const baseSectionFunctions = require('../commonSections/baseSection.lib');
const amazonResultsFunctions = require('./amazonResults.lib');

const AmazonPage = function(driver){
  this.driver;
}

AmazonPage.prototype = Object.assign(
  {},
  baseSectionFunctions,
  amazonResultsFunctions
);
AmazonPage.constructor = AmazonPage;

module.exports = AmazonPage;