Feature: Editor Test for Existing Model
    Scenario: As a user I want to see preview and see customize preview
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I login with valid credentials
        And I see the successfully login Page
        And I navigate back
        Then I click on search make with tech button
        And I see search model page
        Then I see search items
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        And I click on edit pencil icon
        Then I click on dismiss button
        And I click ok in premium reminder
        Then I click on preview button
        Then I see model preview image
        And I click on model preview dismiss button
        Then I click on customizer button
        Then I make changes in the model
        Then I click on preview model button
        Then I see model preview image
        And I click on model preview dismiss button