Feature: fill out and submit forms on HomePage
  Let's explore the functionalities of the home page

#Define variable $numUsers = "3"
@set_numUsers
  Scenario: Set the global variable numUsers
    Given the variable "$numUsers" is equal to "3"

#Define variable $usersList = [JSON Object]
@set_usersList
  Scenario: Set the global variable usersList
    Given the variable "$usersList" is equal to
    """
    {
      "1":{
        "pageName":"SprintPage_1",
        "formId":"form1",
        "dataEntryId":"dataEntry1"
      },
      "2":{
        "pageName":"SprintPage_2",
        "formId":"form2",
        "dataEntryId":"dataEntry2"
      },
      "3":{
        "pageName":"SprintPage_3",
        "formId":"form3",
        "dataEntryId":"dataEntry3"
      }
    }
    """

#Define scenarioFunction($userId, $pageName, $formId, $dataEntryId)
@$sprintPage__fill_out_form_and_submit3
  Scenario: REQ03 - user fill out and submit form and show UltimateQAPage
    Given the user "$userId" is on "$pageName" page
    When the user "$userId" fills out "$formId" form using "$dataEntryId"
    And the user "$userId" clicks on "submit1"
    Then the user "$userId" should be redirected to "UltimateQAPage" page


#Call scenarioFunction("1", "SprintPage_2", "form2", "$usersList[2].dataEntryId")
#...using step: Given the scenario "@$scenario_function_tag" where variables
#               """
#                 #JSON object containing variables and values for replacing.
#               """
@sprintPage__fill_out_form_and_submit4
  Scenario: Many users fill out the form
    Given there are "$numUsers" users
    And the scenario "@$sprintPage__fill_out_form_and_submit3" where variables
    """
    {
      "$userId": "1",
      "$pageName": "SprintPage_2",
      "$formId": "form2",
      "$dataEntryId": "$usersList[2].dataEntryId"
    }
    """
    #You can add more "Given", "When" and "Then" steps here...





