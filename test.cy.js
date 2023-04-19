describe('Enter website', () => {
    it('test', ()=> {
    cy.visit('https://5627135.hs-sites.com/dynamic-forms');

    cy.get('.dynamic-form__button--start').click();

    cy.get('.dynamic-form__step--step-1 .dynamic-form__input:nth-child(1) > input').click();

    cy.get('.dynamic-form__step--step-1 .dynamic-form__input:nth-child(1) > input').type('test');
    
    cy.get('.dynamic-form__step--step-1 .dynamic-form__input:nth-child(2) > input').type('test');

    cy.get('.dynamic-form__button:nth-child(5)').click();
        })
})



