Feature: Share a Model 
    Scenario: As a user I want to Share a Model while uploading files
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I login with valid credentials
        And I see the successfully login Page
        And I navigate back
        Then I click on Share an openSCADModel template button
        Then I click on upload button and uploaded related files
        And I click on eye button to make thumbnail
        Then I enter model name
        Then I enter model discription
        Then I enter keyword
        Then I click on private model checkbox
        And I click ok on popup Model Saved
        Then I click on share model button
        And I click ok on popup Model Saved
        And I see search model page
        And I click on my models & private
        Then I enter name of created model in search field
        And I click on search button
        Then I see search items
        Then I click on item box icon
        And I click on preview model button
        Then I see model preview image
        And I click on model preview dismiss button
        Then I click on search make with tech button
        Then I click on tool icon
        Then I click on delete button
        Then I go home