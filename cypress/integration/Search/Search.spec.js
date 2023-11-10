import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I open web browser for `https://www.wikipedia.org`", () => {
  cy.visit("https://www.wikipedia.org/", {
    onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'languages', {
            value: ['en-US'],
        });
    }
}
); 
});

When("I type `Nicola Tesla` on the search box", () => {
  cy.get("#searchInput").should("be.visible").type("Nicola Tesla");
});

And("I click on search button", () => {
  cy.get(".pure-button").should("be.visible").click();
});

Then("the url should include `Nikola_Tesla`", () => {
  cy.url().should("eq", "https://en.wikipedia.org/wiki/Nikola_Tesla");
});

And("I want to see an image under title `Nikola Tesla` on the right column",() => {
    cy.get(".infobox-above").contains("Nikola Tesla").should("be.visible");
    cy.get(".infobox-image").should("be.visible");
    cy.get(".infobox-image").find("a").should("have.attr", "href", "/wiki/File:Tesla_circa_1890.jpeg");
  });

And("I want to read information about `Born, Died, Education` on the right column",() => {
    cy.contains("Born").should("be.visible");
    cy.get(".infobox-data").eq(0).contains('10 July 1856').should("be.visible");
    cy.contains("Died").should("be.visible");
    cy.get(".infobox-data").eq(1).contains('7 January 1943').should("be.visible");
    cy.contains("Education").should("be.visible");
    cy.get(".infobox-data").eq(4).contains('Graz University of Technology').should("be.visible");
  }
);

And("I want to read a section about `Early Years`", () => {
  cy.get("#Early_years").scrollIntoView().should('be.visible');
});
