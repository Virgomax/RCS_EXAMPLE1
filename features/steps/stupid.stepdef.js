//Defining more steps (has to be in a .stepdef.js file)
const stepDefinitions = {
  step0: {
    stepMethod: 'When',
    stepPattern: 'nothing happens',
    stepTimeout: 10000,
    stepFunction: async ()=>{
      console.log("In this step(When), nothing happened.")
      return;
    }
  },
  step1: {
    stepMethod: 'Then',
    stepPattern: 'nothing',
    stepTimeout: 10000,
    stepFunction: async function(){
      //console.log("My World",this);
      console.log("In this step(Then), we concluded nothing.")
      return;
    }
  }
};

module.exports = stepDefinitions;
