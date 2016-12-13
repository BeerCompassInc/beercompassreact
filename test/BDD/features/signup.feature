Feature: sign up
  As a user,
  I want to be able to create an Account

  Scenario: I want to create an Account
    Given I am on the "/" route
    When I click on the "signup" button
      And I enter "name" into the "username" input
