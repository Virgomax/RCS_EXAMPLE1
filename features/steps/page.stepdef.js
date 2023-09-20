const expect = require('expect');
const MyDriver =require('../store/MyDriver');
const MyPage = require('../store/MyPage');
const CuStore = require('../store/CucumberStorage');
const bFun = require('../../helpers/basicFunctions.lib');

//Defining more steps (has to be in a .stepdef.js file)
const stepDefinitions = {
  step0: {
    stepMethod: 'Given',
    stepPattern: 'the user {string} is on {string} page',
    stepTimeout: 30000,
    stepFunction: async (userId, thisPage)=>{
      console.log(`the user ${userId} is on ${thisPage} page`)
      
      thisPageName = thisPage.split("_");     //In case there are many variations of this page. (sufix _[number])
      await MyDriver.switchTo(userId);        //switch to user's window
      MyPage.activePages[userId] = await new MyPage.availablePages[thisPageName[0]](MyDriver.driver);  //save new PageObject in MyPage.activePages[userId]
      await MyPage.activePages[userId].open(thisPageName[1]);  //open this page
      return;
    }
  },
  step1: {
    stepMethod: 'Then',
    stepPattern: 'the user {string} should be redirected to {string} page',
    stepTimeout: 20000,
    stepFunction: async (userId, nextPage)=>{
      console.log(`the user ${userId} should be redirected to ${nextPage} page`)
      await MyDriver.switchTo(userId);    //switch to user's window
      var expectedUrl = bFun.createUrl('https://ultimateqa.com/',CuStore.formValues[userId]);   //create new URL
      var landingPage = await MyPage.activePages[userId]
        .waitUntilUrlIs_caseInsensitive(expectedUrl,MyPage.availablePages[nextPage]);     //wait until it is redirected to new Url and save the new PageObject in landingPage 
      var url = await landingPage.getCurrentUrl();    //get URL from URL bar
      expect(url.toLowerCase()).toEqual(expectedUrl.toLowerCase());   //expect the gotten URL to match new URL
      return;
    }
  }
};

module.exports = stepDefinitions;
