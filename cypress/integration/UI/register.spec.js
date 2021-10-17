/// <reference types="Cypress" />
import RegisterPage from '../../support/pages/RegisterPage';



describe('Register form flow', () => {
    let registerData;
    let registerLocators;
    let emailAddress;
    before(() => {
        cy.fixture('registerData').then((data) => {
            registerData = data;
        })
        cy.visit(Cypress.env('baseUrl')+'login');
        registerLocators = new RegisterPage();
        
    })
    beforeEach(() => {
        cy.task('getUserEmail').then((email) => {
            emailAddress = "test"+email;
        })
    })

    it('User should be able to navigate to register page', () => {
        cy.clickOnElement(registerLocators.goToRegisterPage());
        cy.assertByText(registerLocators.getPageTitle(), registerData.title)
        
    })
    it('User should not be able to register if submit empty mandatory fields', () => {
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.firstName), registerData.errorRequiredField);
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.lastName), registerData.errorRequiredField);
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.companyName), registerData.errorRequiredField);
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.countryName), registerData.errorRequiredField);
        cy.assertMultipleValues(registerLocators.getErrorField(registerData.errorField.emailAddress), registerData.emailAddressValidationErrors, registerData.separatorMark);
        cy.assertMultipleValues(registerLocators.getErrorField(registerData.errorField.password), registerData.passwordValidationErrors, registerData.separatorMark);
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.confirmPassword), registerData.errorRequiredField);
    })
    it('User should not be able to register if submit empty Confirmation Password field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.confirmPassword), registerData.errorRequiredField);
    })
    it('User should not be able to register if submit empty Password field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.empty);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertMultipleValues(registerLocators.getErrorField(registerData.errorField.password), registerData.passwordValidationErrors, registerData.separatorMark);
    })
    it('User should not be able to register if submit empty Email address field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), registerData.emptyEmailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertMultipleValues(registerLocators.getErrorField(registerData.errorField.emailAddress), registerData.emailAddressValidationErrors, registerData.separatorMark);
    })
    it('User should not be able to register if submit empty Country field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.emptySelectCountryField);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.countryName), registerData.errorRequiredField);
    })
    it('User should not be able to register if submit empty Company field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.empty);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.companyName), registerData.errorRequiredField);
    })
    it('User should not be able to register if submit empty Last Name field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.empty);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.lastName), registerData.errorRequiredField);
    })
    it('User should not be able to register if submit empty First Name field', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.empty);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getErrorField(registerData.errorField.firstName), registerData.errorRequiredField);
    })
    it('User should be able to register if submit valid data', () => {
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getSuccessMessage(), registerData.successMessage);

    })
    it('User should be able to register if submit optional Gender field', () => {
        cy.clickOnElement(registerLocators.goToRegisterPage());
        cy.selectByTextOrValue(registerLocators.getTitleName(), registerData.gender.mr, true);
        cy.typeData(registerLocators.getFirstName(), registerData.firstName.valid);
        cy.typeData(registerLocators.getLastName(), registerData.lastName.valid);
        cy.typeData(registerLocators.getCompanyName(), registerData.companyName.valid);
        cy.selectByTextOrValue(registerLocators.getCountryName(), registerData.countryName);
        cy.typeData(registerLocators.getEmailAddress(), emailAddress);
        cy.typeData(registerLocators.getPassword(), registerData.password.valid);
        cy.typeData(registerLocators.getConfirmPassword(), registerData.confirmationPassword.valid);
        cy.clickOnElement(registerLocators.submitRegisterFormBtn());
        cy.assertIncludeText(registerLocators.getSuccessMessage(), registerData.successMessage);
    })

    it('User should be able to navigate to Login page from Register page', () => {
        cy.clickOnElement(registerLocators.goToRegisterPage());
        cy.clickOnElement(registerLocators.goToLoginPage());
        cy.assertIncludeText(registerLocators.getSuccessMessage(), registerData.successMessage);
    })
})