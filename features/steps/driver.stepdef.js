const MyDriver = require('../store/MyDriver');

//Defining more steps (has to be in a .stepdef.js file)
const stepDefinitions = {
  step0: {
    stepMethod: 'Given',
    stepPattern: 'there are/is {string} user(s)',
    stepTimeout: 40000,
    stepFunction: async function(quantity){
      console.log("My World",this);
      console.log(`there are/is ${quantity} user(s)`);
      await MyDriver.createWindows(quantity);   //opens a (pop-up) window for each user
      return;
    }
  }
};

module.exports = stepDefinitions;
