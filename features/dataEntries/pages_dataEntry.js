const sprintPage_form_dataEntry = require('./forms/sprintPage_form_dataEntry');
const SprintPage = require('../../Pages/sprintPage/SprintPage.class');

const dataEntries = {  //each key is a PageName
  [SprintPage.prototype.pageName]: sprintPage_form_dataEntry 
};


module.exports = dataEntries;