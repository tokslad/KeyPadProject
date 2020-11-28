Feature: In other to buy a property I need to
  Find an Agent.

  Scenario:
  Given I navigate to propertyrete
    When I click on find agent
    And I enter location
    And I enter agent name
    And I select agent type
    And I click on the search button
    Then I should see agents available
