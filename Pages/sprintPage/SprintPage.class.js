const baseSectionFunctions = require('../commonSections/baseSection.lib');
const amazonSectionFunctions = require('../commonSections/amazonSection.lib'); //integration mocha and selenium-webdriver in https://simpleprogrammer.com/selenium-with-node-js/
const sprintContentFunctions = require('./sprintContent.lib');
const UltimateQAPage = require('../ultimateQAPage/UltimateQAPage.class'); //integration mocha and selenium-webdriver in https://simpleprogrammer.com/selenium-with-node-js/

const SprintPage = function (driver){
  this.driver = driver;
}

SprintPage.prototype = Object.assign(
  {pageName: 'SprintPage'},
  baseSectionFunctions,
  sprintContentFunctions,
  amazonSectionFunctions
);

SprintPage.constructor = SprintPage;

module.exports = SprintPage;