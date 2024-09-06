import {Then} from "@badeball/cypress-cucumber-preprocessor";


Then('Successful submission message is displayed', () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
})