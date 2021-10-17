/// <reference types="Cypress" />


class LoginPage {

    constructor(){
        this.validUsername;
        this.validPassword;
    } 

    goToLoginPage(){
        return 'cx-login.ng-star-inserted > .ng-star-inserted';
    }
    getSignInHeading(){
        return '.cx-login-link';
    }
    getUsername(){
        return '[formcontrolname="userId"]';
    }
    getPassword(){
        return '[formcontrolname="password"]';
    }
    getSignInBtn(){
        return 'button[type="submit"]';
    }
    getUsernameError(){
        return 'input[formcontrolname="userId"] + .control-invalid > p.ng-star-inserted';
    }
    getPasswordError(){
        return 'input[formcontrolname="password"] + .control-invalid > p.ng-star-inserted';
    }
    getBadCredentialsError(){
        return '.alert > :nth-child(2)';
    }
    setValidUsername(username){
        this.validUsername = username;
    }
    getValidUsername(){
        return this.validUsername;
    }
    setValidPassword(password){
        this.validPassword = password;
    }
    getValidPassword(){
        return this.validPassword;
    }
    getUserName(){
        return '.accNavComponent > :nth-child(1) > h5.ng-star-inserted';
    }
}

export default LoginPage;