Feature: Directly Access a Model via URL
        Scenario: As a user I can directly access a model via a URL in the form
        Given I visit search model via a url
        Then I find a model on the search page
        And I capture the modelID
        Then I create the url and and access it
        Then I verify the url returned the same model
