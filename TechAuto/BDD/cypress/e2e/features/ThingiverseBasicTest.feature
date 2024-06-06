Feature: Thingiverse Basic Test
        Scenario: As a user I see basic flow of application for thingiverse search
        Given I visit the app url
        When I see landing home page title
        Then I click on account button on menu
        And I see if a user is logged in make it logout
        And I navigate back
        Then I click on search thingiverse button
        And I see search thingiverse page
        Then I enter "model" in the search field in thingiverse
        And I click on search button on thingiverse
        And I check openSCAD checkbox
        Then I click on search item
        Then I click on thingiverse item box icon
        And I see please sign in popup
        And I click on please sign in popup dismiss button on thingiverse
        Then I click on account button on menu
        And I see account management page title
        And I login with valid credentials
        And I see the successfully login Page
        And I navigate back
        Then I click open SCAD model result icon on menu
        Then I delete all existing models in the results queue
        Then I click on search thingiverse button
        Then I click on search item
        Then I click on thingiverse item box icon
        And I see item Image
        Then I click on open Scad general parameters dropdown
        Then I click on queue model generation button
        And I see model queued popup
        Then I click on model queued popup dismiss button
        Then I click processing queue icon on menu
        And I see the queued open SCAD models page
        And I see file name queued on open SCAD models page
        Then I click open SCAD model result icon on menu
        And I see completed rendered models page
        And I see file name on completed rendered models page
        Then I click on file 3D icon
        And I see 3D popup
        Then I click on 3D popup close button
        Then I click on account button on menu
        And I see if a user is logged in make it logout





