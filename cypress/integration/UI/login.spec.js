/// <reference types="Cypress" />
import LoginPage from '../../support/pages/LoginPage'

describe('Login functionality scenarios', () => {
    let userCredentials;
    let loginLocators;
  before(() => { 
    cy.fixture('loginData').then((data) => {

      cy.setValidCredentials(data.email, data.password);

      userCredentials = data;

    });
  
    cy.visit(Cypress.env('baseUrl'));
    loginLocators = new LoginPage();
        
  })
  
  it('User should not be able to login if submit empty email and password fields', () => {
    
    cy.clickOnElement(loginLocators.goToLoginPage());
    cy.typeData(loginLocators.getUsername(), userCredentials.emptyUsername);
    cy.typeData(loginLocators.getPassword(), userCredentials.emptyPassword);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getUsernameError(), userCredentials.requiredFieldError);
    cy.assertIncludeText(loginLocators.getPasswordError(), userCredentials.requiredFieldError);

  })

  it('User should not be able to login if submit empty password field', () => {

    cy.typeData(loginLocators.getUsername(), userCredentials.username);
    cy.typeData(loginLocators.getPassword(), userCredentials.emptyPassword);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getPasswordError(), userCredentials.requiredFieldError);

  })

  it('User should not be able to login if submit empty username field', () => {

    cy.typeData(loginLocators.getUsername(), userCredentials.emptyUsername);
    cy.typeData(loginLocators.getPassword(), userCredentials.password);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getUsernameError(), userCredentials.requiredFieldError);

  })


  it('User should not be able to login if submit wrong password', () => {

    cy.typeData(loginLocators.getUsername(), userCredentials.username);
    cy.typeData(loginLocators.getPassword(), userCredentials.wrongPassword);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getBadCredentialsError(), userCredentials.badCredentialsError);

  })

  it('User should not be able to login if submit wrong username', () => {

    cy.typeData(loginLocators.getUsername(), userCredentials.wrongUsername);
    cy.typeData(loginLocators.getPassword(), userCredentials.password);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getBadCredentialsError(), userCredentials.badCredentialsError);

  })

  it('User should be able to login with valid credentials', () => {

    cy.typeData(loginLocators.getUsername(), userCredentials.username);
    cy.typeData(loginLocators.getPassword(), userCredentials.password);
    cy.clickOnElement(loginLocators.getSignInBtn());
    cy.assertIncludeText(loginLocators.getUserName(), userCredentials.myAccountLabel);
    
  })


})