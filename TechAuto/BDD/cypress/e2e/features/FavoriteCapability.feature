Feature: favorite capability
    Scenario: As a user I add a new favorite capability
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I see the successfully login Page
        And I navigate back
        Then I click on search make with tech button
        And I see search model page
        Then I see search items
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        Then I click on item box icon
        Then I click on heart icon and see heart become red
        Then I click on search make with tech button
        And I click on the favorite checkbox on search
        Then I see model "Model Used for System Testing" in favorite list
        And I click on the favorite checkbox on search
        Then I enter "Model Used for System Testing" in the search field
        And I click on search button
        Then I see search items
        Then I click on item box icon
        Then I click on heart icon and see heart become Gray
        Then I click on search make with tech button
        And I click on the favorite checkbox on search
        Then I see model "Model Used for System Testing" is not exist in favorite list