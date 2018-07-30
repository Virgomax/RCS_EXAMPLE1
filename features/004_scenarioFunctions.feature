#In this file we use variables defined in the file 003_scenarioFunctions_1.feature
#Notice that cucumber runs feature files in alphabetical order, ...
#...so if you call variables from a different file they have to be defined in a file whose name...
#...precedes the name of this file in alphabetical order, in this case...
#..."003_scenarioFunctions_1.feature" precedes "004_scenarioFunctions_2.feature".

Feature: fill out and submit forms on HomePage (different approach)
  Let's explore the functionalities of the home page


#Define scenarioFunction($userId)      ## $usersList is variable defined as an JSON Object
@$sprintPage__fill_out_form_and_submit5
  Scenario: REQ04 - user fill out and submit form and show UltimateQAPage
    Given the user "$userId" is on "$usersList[$userId].pageName" page
    When the user "$userId" fills out "$usersList[$userId].formId" form using "$usersList[$userId].dataEntryId"
    And the user "$userId" clicks on "submit1"
    Then the user "$userId" should be redirected to "UltimateQAPage" page

#Call scenarioFunction(from "1" to $numUsers)
@sprintPage__fill_out_form_and_submit6
  Scenario: Many users fill out the form
    Given there are "$numUsers" users
    And the scenario "@$sprintPage__fill_out_form_and_submit5" for variable "$userId" from "1" to "$numUsers"
