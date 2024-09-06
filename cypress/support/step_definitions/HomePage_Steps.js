import {Given, When} from "@badeball/cypress-cucumber-preprocessor";


const url = "https://www.webdriveruniversity.com/";

Given(`User navigates to test website`, () => {
    cy.visit(url);
});

When(`He should click Contact US button to open form`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})
