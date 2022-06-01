import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the homepage", () => {
  cy.visit("https://concert-registration.vercel.app/");
});
When("The homepage as loaded", () => {
  cy.get("#field-1-label").should("be.visible");
});
Then("I should see the home page", () => {
  cy.get("#field-1-label").should("be.visible");
});
