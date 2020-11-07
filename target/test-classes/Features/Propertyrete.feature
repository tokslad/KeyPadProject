Feature: As a propertyrete user I want to find a house.
          SO THAT I can buy house.

  Scenario: Valid information
    Given that I’m on propertyrete homepage
    When I click on buy
    And I select property for sale
    And I enter town name
    And I click search
    Then I should see more filters
