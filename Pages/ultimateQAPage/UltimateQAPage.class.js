const baseSectionFunctions = require('../commonSections/baseSection.lib');

const UltimateQAPage = function(driver) {
  this.driver = driver;
}

UltimateQAPage.prototype = Object.assign(
  {},
  baseSectionFunctions
);

UltimateQAPage.constructor = UltimateQAPage;


module.exports = UltimateQAPage;