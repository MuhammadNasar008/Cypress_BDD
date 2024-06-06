Feature: Preview Model
        Scenario: As a user, I preview the model
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I login with valid credentials
        And I see the successfully login Page
        