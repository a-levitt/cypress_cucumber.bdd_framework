import {When} from "@badeball/cypress-cucumber-preprocessor";



When(`Fill in First Name field`, () => {
    cy.get("[name='first_name']").type("John");
})

When(`Fill in Last Name field`, () => {
    cy.get("[name='last_name']").type("Doe");
})

When(`Fill in Email Address field`, () => {
    cy.get("[name='email']").type("test.email@cypress.com");
})

When(`Fill in Comment field`, () => {
    cy.get("[name='message']").type("Lorem ipsum comment.");
})

When(`Click Submit button`, () => {
    cy.get("[type='submit']").click();
})