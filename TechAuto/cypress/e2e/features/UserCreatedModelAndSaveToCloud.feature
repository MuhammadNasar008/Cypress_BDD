Feature: write script and save to cloud
    Scenario: As a user I want to create model and save to cloud
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
        Then I click on save to cloud
        And I click ok in premium reminder
        Then I type file name
        And I save the file
        Then I click ok on popup
        Then I click on search make with tech button
        And I see search model page
        Then I see search items
        And I click on my models & private
        Then I enter name created model in the search field
        And I click on search button
        Then I see search items
        And I click on edit pencil icon
        And I click ok in premium reminder
        Then I click on dismiss button
        Then I click on preview button
        Then I see model preview image
        And I click on model preview dismiss button
        Then I click on search make with tech button
        Then I click on tool icon
        Then I click on delete button
        Then I go home