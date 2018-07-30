Feature: fill out and submit forms on SprintPage
  Some nice description here.

#@sprintPage__fill_out_form_and_submit2 calls @sprintPage__fill_out_form_and_submit1 and changes the parameter in each step.
@sprintPage__fill_out_form_and_submit2
  Scenario Outline: REQ02 - user fill out and submit form and show UltimateQAPage
    Given the scenario "@sprintPage__fill_out_form_and_submit1" with parameters 
      """
      {
        "1": ["@openwindows","{\"1\":[\"4\"]}"],
        "2": [1, "SprintPage_1"],
        "3": [2, "SprintPage_2"],
        "4": [1, "form1", "dataEntry1"],
        "5": [2, "form2", "dataEntry2"], 
        "6": [1, "submit1"], 
        "7": [2, "submit1"],
        "8": [1, "UltimateQAPage"],
        "9": [2, "UltimateQAPage"],
        "timeout": 222000
      }
      """
    And the user "1" is on "<page_name>" page
    When the user "1" fills out "<form_id>" form using "<data_entry>"
    And the user "1" clicks on "submit1"
    Then the user "1" should be redirected to "UltimateQAPage" page


    Examples:
    | page_name    | page_name2   | form_id  | form_id2     | data_entry | data_entry2 |
    | SprintPage_1 | SprintPage_2 | form1    | form2        | dataEntry1 | dataEntry2  |
