Feature: Save Parameter Test
        Scenario: As a user I see share a model and search for it then delete it
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I see if a user is logged in make it logout
        And I navigate back
        Then I click on account button on menu
        And I see account management page title
        And I login with valid credentials
        And I see the successfully login Page
        And I navigate back
        Then I click search local openSCAD models icon on menu
        And I enter model id in model search field
        And I click on search button
        And I see search model is visible
        Then I click on item box icon
        Then I click on open Scad general parameters dropdown
        And I click on save retrieve parameters button
        And I enter value in save retrieve parameters
        Then I click on save parameter set button
        Then I click search local openSCAD models icon on menu
        And I click on search button
        Then I click on item box icon
        And I click on save retrieve parameters button
        Then I see parameter save data
        Then I click on save retrieve parameters delete button
        And I see parameter save data is deleted
       





