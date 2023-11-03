Feature: Search for an article on Wikipedia
    Scenario: We should find one article and land on its page
        Given I open web browser for `https://www.wikipedia.org`
        When I type `Nicola Tesla` on the search box
        And I click on search button
        Then the url should include `Nikola_Tesla`
        And I want to see an image under title `Nikola Tesla` on the right column
        And I want to read information about `Born, Died, Education` on the right column
        And I want to read a section about `Early Years`