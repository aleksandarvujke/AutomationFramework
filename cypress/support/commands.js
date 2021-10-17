import LoginPage from '../support/pages/LoginPage';
import "cypress-localstorage-commands";

// import cypress from 'cypress';
const loginLocators = new LoginPage();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Assertion block of reusable methods

Cypress.Commands.add('assertByText', (locator, expectedText) => {
       
        cy.get(locator).should('have.text', expectedText)
})
Cypress.Commands.add('typeData', (locator, text) => {
    if(text == ''){
        cy.get(locator).clear();  
    }else{
        cy.get(locator).clear().type(text);    
    }  
})
Cypress.Commands.add('assertIncludeText', (locator, expectedText) => {
    cy.get(locator).then(res => {
        expect(res.text().trim()).to.eq(expectedText)
    })
})


