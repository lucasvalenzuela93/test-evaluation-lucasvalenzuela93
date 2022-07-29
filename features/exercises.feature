Feature: Automation Exercise

Background:
  Given User lands on Automation Exercise page

  # #Test Case 1: Register User
  Scenario: User is able to register with email
    When the user click on 'Signup / Login' button
    And user enter credentials
    Then user should see a message saying ENTER ACCOUNT INFORMATION
    And user fills details
    Then account created label is displayed
    Then user Test is logged
    And user is deleted

  # #Test Case 2: Login User with correct email and password
  Scenario: User can log with credentials
    When the user click on 'Signup / Login' button
    And user logins with credentials
    Then user Test is logged
    And user is deleted

   #Test Case 6: Contact Us Form
   Scenario: User completes the contact us form
    When the user click on 'Contact us' button
    And user fill all required fields
    Then verify success message is displayed

  #Test Case 8: Verify All Products and product detail page
  Scenario: User can see the products details
    When the user click on 'Products' button
    And user selects the first product listed 
    Then the products details are displayed
  
