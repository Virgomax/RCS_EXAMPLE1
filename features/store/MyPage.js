const SprintPage = require('../../Pages/sprintPage/SprintPage.class'); //integration mocha and selenium-webdriver in https://simpleprogrammer.com/selenium-with-node-js/
const UltimateQAPage = require('../../Pages/ultimateQAPage/UltimateQAPage.class'); //integration mocha and selenium-webdriver in https://simpleprogrammer.com/selenium-with-node-js/

var MyPage = {};
MyPage.activePages = {};      //MyPage.activePages[userId] = The PageObject that this user is using.
MyPage.availablePages = {     //All Pages that exists in the project
  SprintPage,
  UltimateQAPage
}


module.exports = MyPage;
