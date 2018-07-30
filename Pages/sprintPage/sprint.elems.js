const formNames = { //HTML name attributes of forms
  form1: 'sprint1_form',
  form2: 'sprint2_form',
  form3: 'sprint3_form'
};

const forms = { //HTML name attributes of form elements
  [formNames.form1]: {
     firstName: 'firstname'
  },
  [formNames.form2]: {
    firstName: 'firstname',
    lastName: 'lastname'
  },
  [formNames.form3]: {
    gender: 'gender',
    firstName: 'firstname',
    lastName: 'lastname'
  }
}

const buttonNames = { //x-path of element
  submit1: '//form[@action="https://www.ultimateqa.com"]//input[@type="submit"]'
}

const sprintElements = {
  formNames,
  forms,
  buttonNames
}

module.exports = sprintElements;
