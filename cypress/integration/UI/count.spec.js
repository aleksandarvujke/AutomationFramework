/// <reference types="Cypress" />

describe('Email confirmation', () => {
    
    before(()=> {
        cy.visit("https://jsapps.cdtrfbgg54-sandvikab1-s1-public.model-t.cc.commerce.ondemand.com/de/en")
        cy.viewport(1400, 900);
    })
    it('navigation menu', () => {
        let pera;
        cy.get('[aria-label="Holemaking"]').click();
        cy.get('nav.is-open > :nth-child(2) > [depth="2"] > :nth-child(1) > .wrapper > .childs > :nth-child(1) > cx-generic-link.ng-star-inserted > .ng-star-inserted').click();
        cy.get('dp-product-details').shadow().find('button').then((el) => {
            let count = 0;
            for(let i = 0; i<el.length; i++){
                cy.get(el).eq(i).click().then(() => {
                    cy.get('dp-product-details').shadow().find('div.card-body div.product').then(leng => {
                        return count = count + parseInt(leng.length);
                    })
                });
            }
            
        }).then(res => {
            expect(res).to.eq(100)
        })
        console.log(pera)
        
    })
  })

  /* .then(item => {
            let totalCount = 0;
            // for(let i=0; i<item.length;i++){
                
            //     cy.get(item).find('div.card-header button').eq(i).click({force: true});
            //     console.log(cy.get(item).find('div.card-body').then(items=>{
            //         items.length
            //     }))
            //         cy.get(item).find('div.product').then(product => {
            //             totalCount += product.length
            //         })
                
                    
                
                
                
            // }
            
        })*/