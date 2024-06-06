Feature: write script and preview
    Scenario: As a user I want to select pencil from the top menu bar and write script and see preview
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I login with valid credentials
        And I see the successfully login Page
        Then I click pencil from top bar
        And I click ok in premium reminder
        Then I click on dismiss button
        Then I type script in editor
        Then I click on preview button
        Then I see model preview image
        And I click on model preview dismiss button
        Then I click on customizer button
        Then I click on preview button
        Then I see model preview image
        And I click on model preview dismiss button
        