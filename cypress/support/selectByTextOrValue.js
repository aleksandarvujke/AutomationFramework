const selectByTextOrValue = (locator, text, byValue = false) => {
    let splitText;
    let capitalizedLetters;
    if (text == null){
        cy.get(locator).invoke('val', '').trigger('change');
    }else{
        
            splitText = text.split("_");

    if(splitText.length == 3){
        capitalizedLetters = splitText[0].charAt(0).toUpperCase()
        + 
        splitText[0].slice(1).toLowerCase() 
        +" "+ 
        splitText[1].toLowerCase()
        +" "+ 
        splitText[2].charAt(0).toUpperCase() 
        + 
        splitText[2].slice(1).toLowerCase();
    }
    if(splitText.length == 2){
        capitalizedLetters = splitText[0].charAt(0).toUpperCase()
        +
        splitText[0].slice(1).toLowerCase()
        +" "+
        splitText[1].charAt(0).toUpperCase() 
        + 
        splitText[1].slice(1).toLowerCase()
    }
    if(splitText.length == 1){
        capitalizedLetters = splitText[0].charAt(0).toUpperCase() + splitText[0].slice(1).toLowerCase();
    }
        console.log(byValue)
        console.log(text)
        if(byValue){
            cy.get(locator).select(text);
        }else{
            cy.get(locator).select(capitalizedLetters, {force: true});
        }   
    }
}
Cypress.Commands.add('selectByTextOrValue', selectByTextOrValue);