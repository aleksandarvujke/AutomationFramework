import "../../support/assertMultipleValues";
import "../../support/pages/RegisterPage";
import  RegisterPage  from "../../support/pages/RegisterPage";
describe('Email confirmation', () => {
    let userEmail;
    let registerData;
    let registerP = new RegisterPage();
  
    before(() => {
      // get and check the test email only once before the tests
      cy.task('getUserEmail').then((email) => {
        expect(email).to.be.a('string')
        userEmail = email
      })
      cy.fixture("registerData").then(data => {
          registerData = data;
      })
      cy.visit(Cypress.env('baseUrl')+ 'login/register')
    })
  
    it('sends confirmation code', () => {
    //   ...
    const array = {
      "user": ["aleksandar", "pera"]
    };
    console.log(Cypress._.get(array, "user[0]", "sloba"));
    cy.assertMultipleValues(registerP.getErrorField(registerData.errorField.firstName), registerData.emailAddressValidationErrors)
    })
    
  })