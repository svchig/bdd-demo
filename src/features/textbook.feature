@textbook
Feature: Textbook

Scenario: Textbook page should have "Современный учебник JavaScript" title
    Given I open "textbook" page
    Then Page title should "be equal to" "Современный учебник JavaScript"

Scenario: Textbook page should not have "Современный учебник JavaScript!" title
    Given I open "textbook" page
    Then Page title should "not be equal to" "Современный учебник JavaScript!"

@1
Scenario: It should be possible to open and close a modal login window
    When I open "textbook" page
    And I click "login" button in the sitetoolbar menu
    Then modal window should be displayed

    When I click "close" button in modal window
    Then modal window should not be displayed

