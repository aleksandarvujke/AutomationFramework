const assertMultipleValues = (locator, expectedArray, separatorMark) => {
    cy.get(locator).then(res => {
        const errorArray = [];
        for(let i = 0; i < res.length; i++){
            errorArray.push(res.text().split(separatorMark)[i].trim());  
        }
        errorArray.forEach(($el, index) => {
            expect($el).to.equal(expectedArray[index]);
        });
    })
}
Cypress.Commands.add('assertMultipleValues', assertMultipleValues);