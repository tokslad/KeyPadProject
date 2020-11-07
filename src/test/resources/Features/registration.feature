Feature: Registration

  Scenario Outline: Valid Registration
    Given I navigate to propertyrete website
    #And I click on hello sign in
    And I click on register button
    When I enter first name "<FirstName>"
    And I enter last name "<LastName>"
    And I enter email "<Email>"
    And I enter phone number "<PhoneNumber>"
    And I enter password "<Password>"
    And I enter confirm password "<ConfirmPassword>"
    And I click on sign up button
    Then I get an error message The Password field must be at least 4 characters in length.
    Then I get a message please enter an email address
    Then I get an error message invalid first name! please check your entries and try again

    Examples:
      | FirstName | LastName | Email                | PhoneNumber | Password | ConfirmPassword |
      | Kubo      | Cocu     | Kubokubo22@gmail.com | 7984506983  | L0nd0n   | L0nd0n          |
      | kubo      | Cocu     | @gmail.om            | 7984506983  | L0nd0n   | L0nd0n          |
      | Kubo      | Cocu     | kubokubo21@gmail.com | 7984506983  | L        | L               |
      | !~@!      | Cocu     | kubokubo29@gmail.com | 7984506983  | L0nd0n   | L0nd0n          |





