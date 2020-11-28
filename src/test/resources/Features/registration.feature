Feature: Registration

  Scenario: Valid Registration
    Given I navigate to propertyrete website "https://propertyrete.com/"
    And I click on hello sign in
    And I click on register button
    When I enter first name "Kubio"
    And I enter last name "Dougd"
    And I enter email "kubooD22@gmail.com"
    And I enter phone number "07934982301"
    And I enter password "L0nd0n21"
    And I enter confirm password "L0nd0n21"
    And I click on sign up button
    Then a message "Thank you for signing up please check your mail or mobile to activate your account"







