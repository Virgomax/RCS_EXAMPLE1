Feature: fill out and submit forms on SprintPage
  Some nice description here.

#@openwindows is a traditional scenario
@openwindows
 Scenario: some scenario to open windows
    Given there are "1" users

#@sprintPage__fill_out_form_and_submit1 calls @openwindows and changes the parameter in step1 to "3" (to open 3 Chrome windows)
@sprintPage__fill_out_form_and_submit1
  Scenario Outline: REQ01 - user fill out and submit form and show UltimateQAPage
    Given the scenario "@openwindows" with parameters
    """
    {
      "1":["3"]
    }
    """
    And the user "1" is on "<page_name>" page
    And the user "2" is on "<page_name2>" page
    When the user "1" fills out "<form_id>" form using "<data_entry>"
    And the user "2" fills out "<form_id2>" form using "<data_entry2>"
    And the user "1" clicks on "submit1"
    And the user "2" clicks on "submit1"
    Then the user "1" should be redirected to "UltimateQAPage" page
    And the user "2" should be redirected to "UltimateQAPage" page

    Examples:
    | page_name    | page_name2   | form_id  | form_id2     | data_entry | data_entry2 |
    | SprintPage_1 | SprintPage_2 | form1    | form2        | dataEntry1 | dataEntry2  |
  #  | SprintPage_2 | SprintPage_3 | form2    | form3        | dataEntry2 | dataEntry3  |
  #  | SprintPage_3 | SprintPage_1 | form3    | form1        | dataEntry3 | dataEntry1  |


