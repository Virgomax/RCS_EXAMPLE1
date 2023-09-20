const MyPage = require('../store/MyPage');
const CuStore = require('../store/CucumberStorage');
const MyDriver = require('../store/MyDriver');
const pagesDataEntry = require('../dataEntries/pages_dataEntry');

//Defining more steps (has to be in a .stepdef.js file)
const stepDefinitions = {
  step0: {
    stepMethod: 'When',
    stepPattern: 'the user {string} fills out {string} form using {string}',
    stepTimeout: 15000,
    stepFunction: async (userId, formId, dataEntryId)=>{
      console.log(`the user ${userId} fills out ${formId} form using ${dataEntryId}`)
      await MyDriver.switchTo(userId);  //switch to user's window/
      var thisPageName = MyPage.activePages[userId].pageName;    //get thisPageName
      var targetFormName = MyPage.activePages[userId].formNames[formId];    //get targetFormName
      CuStore.formValues[userId] = pagesDataEntry[thisPageName][targetFormName][dataEntryId];     //get "formValues" object (DataEntry)
      await MyPage.activePages[userId].fillOutForm(CuStore.formValues[userId]);    //fillOurForm with "formValues" object
      return;
    }
  }
};

module.exports = stepDefinitions;
