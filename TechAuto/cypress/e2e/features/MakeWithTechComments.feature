Feature: Comment Test
    Scenario: As a user I see add comments on model and delete comments on model
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I see the successfully login Page
        And I navigate back
        Then I click on search make with tech button
        And I see search model page
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        And I click on comment icon
        Then I delete all existing model comment
        Then I enter comments in text field
        And I click on add comment button
        Then I see comment is added on model
        And I click on done
        Then I click on search make with tech button
        And I see search model page
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        And I click on comment icon
        Then I see comment is added on model
        Then I delete all existing model comment
        And I click on done
        Then I click on search make with tech button
        And I see search model page
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        And I click on comment icon
        Then I see the comment is deleted on model

       