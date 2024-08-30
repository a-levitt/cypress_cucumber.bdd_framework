Feature: Using contact us form on test website

  Scenario: Valid Contact Us form submission
      Given Navigating to test website
      When Contact Us form opened
      And First Name field is filled in
      And Last Name field is filled in
      And Email Address field is filled in
      And Comment field is filled in
      And Submit button is pressed
      Then Successful submission message is displayed