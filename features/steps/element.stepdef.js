const MyDriver = require('../store/MyDriver');
const MyPage = require('../store/MyPage');

//Defining more steps (has to be in a .stepdef.js file)
const stepDefinitions = {
  step0: {
    stepMethod: 'When',
    stepPattern: 'the user {string} clicks on {string}',
    stepTimeout: 10000,
    stepFunction: async (userId, elemId)=>{
      console.log(`the user ${userId} clicks on ${elemId}`)
      
      await MyDriver.switchTo(userId);
      var buttonXPath = MyPage.activePages[userId].buttonNames[elemId]
      await MyPage.activePages[userId].clickOn(buttonXPath);
      return;
    }
  }
};

module.exports = stepDefinitions;
