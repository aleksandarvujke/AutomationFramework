const clickOnElement = (locator) => {
    cy.get(locator).click();
}
Cypress.Commands.add('clickOnElement', clickOnElement);