const {formNames,forms,buttonNames} = require('./sprint.elems');

const sprintContentFunctions = {
  async open(sprintNumber){
    await this.goTo('https://ultimateqa.com/sample-application-lifecycle-sprint-'+sprintNumber);
  },
  
  async ['fillOut_' + forms[formNames.form1].firstName](value){  //function whose name is fillOut_firstname
    await this.fillOutField(`//*[@name="${forms[formNames.form1].firstName}"]`,value);
  },

  async ['fillOut_' + forms[formNames.form2].lastName](value){  //function whose name is fillOut_lastname
    await this.fillOutField(`//*[@name="${forms[formNames.form2].lastName}"]`,value);
  },

  async ['fillOut_' + forms[formNames.form3].gender](value){  //function whose name is fillOut_gender
    await this.clickOn(`//input[@value="${value}"]`);
  },

  async submit(){
    await this.clickOn('//form[@action="https://ultimateqa.com"]//input[@type="submit"]');
  },

  async submitSprintForm(){
    await this.submit();
  },

  forms,
  formNames,
  buttonNames
}

module.exports = sprintContentFunctions;