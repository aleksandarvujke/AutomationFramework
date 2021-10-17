/// <reference types="Cypress" />


class RegisterPage {

    constructor(){

    }
    getPageTitle(){
        return 'title';
    }
    goToRegisterPage(){
        return '.request-access > span > a';
    }
    goToLoginPage(){
        return '.cx-login-link';
    }
    getTitleName(){
        return 'select[formcontrolname="titleCode"]';
    }
    getFirstName(){
        return 'input[name="firstname"]';
    }
    getLastName(){
        return 'input[name="lastname"]';
    }
    getCompanyName(){
        return 'input[name="company"]';
    }
    getCountryName(){
        return 'select[formcontrolname="country"]';
    }
    getEmailAddress(){
        return 'input[name="email"]';
    }
    getPassword(){
        return 'input[name="password"]'; 
    }
    getConfirmPassword(){
        return 'input[name="confirmpassword"]'; 
    }
    submitRegisterFormBtn(){
        return 'button[type="Submit"]';
    }
    getSuccessMessage(){
        return '.alert > :nth-child(2)';
    }
    getErrorField(field){
        const funName = String('this.get'+field.split('_')[1]+'()');
        const errorLocator = eval(funName)
        return errorLocator + " +  cx-form-errors > p";
    }
    
}

export default RegisterPage;