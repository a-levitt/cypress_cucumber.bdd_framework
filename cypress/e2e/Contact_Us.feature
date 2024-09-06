Feature: Using contact us form on test website

  Scenario: Valid Contact Us form submission
      Given User navigates to test website
      When He should click Contact US button to open form
      And Fill in First Name field
      And Fill in Last Name field
      And Fill in Email Address field
      And Fill in Comment field
      And Click Submit button
      Then Successful submission message is displayed