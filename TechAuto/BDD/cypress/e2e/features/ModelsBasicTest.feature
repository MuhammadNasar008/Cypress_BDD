Feature: Models Basic Test
    Scenario: As a user I see basic flow of application for model search
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I see if a user is logged in make it logout
        And I navigate back
        Then I click on search make with tech button
        And I see search model page
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        
