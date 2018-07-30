const {formNames,forms} = require('../../../Pages/sprintPage/sprint.elems');

const dataEntry1 = {
  [forms[formNames.form1].firstName]: "Holy"
}

const dataEntry2 = {
  [forms[formNames.form2].firstName]: "Holy",
  [forms[formNames.form2].lastName]: "Loly"
}

const dataEntry3 = {
  [forms[formNames.form3].gender]: "female",
  [forms[formNames.form3].firstName]: "Holy",
  [forms[formNames.form3].lastName]: "Loly"
}

const sprint_form_dataEntry = {
  [formNames.form1]: {dataEntry1},
  [formNames.form2]: {dataEntry2},
  [formNames.form3]: {dataEntry3}
}

module.exports = sprint_form_dataEntry;