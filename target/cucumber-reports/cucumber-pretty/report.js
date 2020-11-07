$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Propertyrete.feature");
formatter.feature({
  "line": 1,
  "name": "As a propertyrete user I want to find a house.",
  "description": "        SO THAT I can buy house.",
  "id": "as-a-propertyrete-user-i-want-to-find-a-house.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid information",
  "description": "",
  "id": "as-a-propertyrete-user-i-want-to-find-a-house.;valid-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "that I’m on propertyrete homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on buy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select property for sale",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter town name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see more filters",
  "keyword": "Then "
});
formatter.match({
  "location": "Propstepdef.thatIMOnPropertyreteHomepage()"
});
formatter.result({
  "duration": 14468972678,
  "status": "passed"
});
formatter.match({
  "location": "Propstepdef.iClickOnBuy()"
});
formatter.result({
  "duration": 42422,
  "status": "passed"
});
formatter.match({
  "location": "Propstepdef.iSelectPropertyForSale()"
});
formatter.result({
  "duration": 37968,
  "status": "passed"
});
formatter.match({
  "location": "Propstepdef.iEnterTownName()"
});
formatter.result({
  "duration": 41891,
  "status": "passed"
});
formatter.match({
  "location": "Propstepdef.iClickSearch()"
});
formatter.result({
  "duration": 39621,
  "status": "passed"
});
formatter.match({
  "location": "Propstepdef.iShouldSeeMoreFilters()"
});
formatter.result({
  "duration": 38187,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to propertyrete website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#And I click on hello sign in"
    }
  ],
  "line": 6,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter first name \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter last name \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter phone number \"\u003cPhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter confirm password \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get the outcome \"\u003cOutcome\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "registration;valid-registration;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "PhoneNumber",
        "Password",
        "ConfirmPassword",
        "Outcome"
      ],
      "line": 17,
      "id": "registration;valid-registration;;1"
    },
    {
      "cells": [
        "Kubo",
        "Cocu",
        "Kubokubo22@gmail.com",
        "7984506983",
        "L0nd0n",
        "L0nd0n",
        "passed"
      ],
      "line": 18,
      "id": "registration;valid-registration;;2"
    },
    {
      "cells": [
        "kubo",
        "Cocu",
        "@gmail.om",
        "7984506983",
        "L0nd0n",
        "L0nd0n",
        "failed"
      ],
      "line": 19,
      "id": "registration;valid-registration;;3"
    },
    {
      "cells": [
        "Kubo",
        "Cocu",
        "kubokubo21@gmail.com",
        "7984506983",
        "L",
        "L",
        "failed"
      ],
      "line": 20,
      "id": "registration;valid-registration;;4"
    },
    {
      "cells": [
        "!~@!",
        "Cocu",
        "kubokubo29@gmail.com",
        "7984506983",
        "L0nd0n",
        "L0nd0n",
        "failed"
      ],
      "line": 21,
      "id": "registration;valid-registration;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to propertyrete website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#And I click on hello sign in"
    }
  ],
  "line": 6,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter first name \"Kubo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter last name \"Cocu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email \"Kubokubo22@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter phone number \"7984506983\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"L0nd0n\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter confirm password \"L0nd0n\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get the outcome \"passed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registstepdefs.iNavigateToPropertyreteWebsite()"
});
formatter.result({
  "duration": 14159931866,
  "status": "passed"
});
formatter.match({
  "location": "registstepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 435960409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kubo",
      "offset": 20
    }
  ],
  "location": "registstepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 8800509,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.registstepdefs.iEnterFirstName(registstepdefs.java:32)\n\tat ✽.When I enter first name \"Kubo\"(registration.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Cocu",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kubokubo22@gmail.com",
      "offset": 15
    }
  ],
  "location": "registstepdefs.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7984506983",
      "offset": 22
    }
  ],
  "location": "registstepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 18
    }
  ],
  "location": "registstepdefs.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 26
    }
  ],
  "location": "registstepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registstepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "passed",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iGetTheOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to propertyrete website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#And I click on hello sign in"
    }
  ],
  "line": 6,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter first name \"kubo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter last name \"Cocu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email \"@gmail.om\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter phone number \"7984506983\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"L0nd0n\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter confirm password \"L0nd0n\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get the outcome \"failed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registstepdefs.iNavigateToPropertyreteWebsite()"
});
formatter.result({
  "duration": 15980845329,
  "status": "passed"
});
formatter.match({
  "location": "registstepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 632878788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubo",
      "offset": 20
    }
  ],
  "location": "registstepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 430911,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.registstepdefs.iEnterFirstName(registstepdefs.java:32)\n\tat ✽.When I enter first name \"kubo\"(registration.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Cocu",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@gmail.om",
      "offset": 15
    }
  ],
  "location": "registstepdefs.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7984506983",
      "offset": 22
    }
  ],
  "location": "registstepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 18
    }
  ],
  "location": "registstepdefs.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 26
    }
  ],
  "location": "registstepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registstepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "failed",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iGetTheOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to propertyrete website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#And I click on hello sign in"
    }
  ],
  "line": 6,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter first name \"Kubo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter last name \"Cocu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email \"kubokubo21@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter phone number \"7984506983\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"L\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter confirm password \"L\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get the outcome \"failed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registstepdefs.iNavigateToPropertyreteWebsite()"
});
formatter.result({
  "duration": 13972273365,
  "status": "passed"
});
formatter.match({
  "location": "registstepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 505778242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kubo",
      "offset": 20
    }
  ],
  "location": "registstepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 411769,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.registstepdefs.iEnterFirstName(registstepdefs.java:32)\n\tat ✽.When I enter first name \"Kubo\"(registration.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Cocu",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "kubokubo21@gmail.com",
      "offset": 15
    }
  ],
  "location": "registstepdefs.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7984506983",
      "offset": 22
    }
  ],
  "location": "registstepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 18
    }
  ],
  "location": "registstepdefs.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 26
    }
  ],
  "location": "registstepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registstepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "failed",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iGetTheOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Valid Registration",
  "description": "",
  "id": "registration;valid-registration;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to propertyrete website",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#And I click on hello sign in"
    }
  ],
  "line": 6,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter first name \"!~@!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter last name \"Cocu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email \"kubokubo29@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter phone number \"7984506983\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"L0nd0n\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter confirm password \"L0nd0n\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get the outcome \"failed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registstepdefs.iNavigateToPropertyreteWebsite()"
});
formatter.result({
  "duration": 12626353472,
  "status": "passed"
});
formatter.match({
  "location": "registstepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 336857650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!~@!",
      "offset": 20
    }
  ],
  "location": "registstepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 513367,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.registstepdefs.iEnterFirstName(registstepdefs.java:32)\n\tat ✽.When I enter first name \"!~@!\"(registration.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Cocu",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iEnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "kubokubo29@gmail.com",
      "offset": 15
    }
  ],
  "location": "registstepdefs.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7984506983",
      "offset": 22
    }
  ],
  "location": "registstepdefs.iEnterPhoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 18
    }
  ],
  "location": "registstepdefs.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L0nd0n",
      "offset": 26
    }
  ],
  "location": "registstepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registstepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "failed",
      "offset": 19
    }
  ],
  "location": "registstepdefs.iGetTheOutcome(String)"
});
formatter.result({
  "status": "skipped"
});
});;