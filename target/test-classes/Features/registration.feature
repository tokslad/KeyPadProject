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
    Then I get the outcome "<Outcome>"
    Then I get

    Examples:
      | FirstName | LastName | Email                | PhoneNumber | Password | ConfirmPassword | Outcome |
      | Kubo      | Cocu     | Kubokubo22@gmail.com | 7984506983  | L0nd0n   | L0nd0n          | passed  |
      | kubo      | Cocu     | @gmail.om            | 7984506983  | L0nd0n   | L0nd0n          | failed  |
      | Kubo      | Cocu     | kubokubo21@gmail.com | 7984506983  | L        | L               | failed  |
      | !~@!      | Cocu     | kubokubo29@gmail.com | 7984506983  | L0nd0n   | L0nd0n          | failed  |





