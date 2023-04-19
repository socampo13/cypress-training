

describe('Enter website', () => {
    it('Enter website', () => {
        cy.visit('https://www.onthefuze.com.au')

        cy.contains('Accept').click()
        cy.contains('Skillsets').click()
        cy.contains('HubSpot API').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.contains('Skillsets').click()
        cy.contains('Quality Assurance').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.contains('Skillsets').click()
        cy.contains('Dedicated Project Manager').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.contains('Skillsets').click()
        cy.contains('What We Don’t Do').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.contains('About us').click()

        
    })

    it('Enter T&C', () => {
        cy.visit('https://www.onthefuze.com.au')

        cy.contains('Accept').click()
        cy.contains('Terms and Conditions').scrollIntoView().click()
      
    })

    it('Enter Privacy Policy', () => {
        cy.visit('https://www.onthefuze.com.au')

        cy.contains('Accept').click()
        cy.get('#__hsNewLink').contains('Privacy Policy').click()
      
    })

    it('Enter Instagram', () => {
        cy.visit('https://www.onthefuze.com.au')

        cy.get('#hs-eu-confirmation-button').click()
        cy.get('img').filter('[alt="Igm"]').click()
        cy.url().should('eq', 'https://www.instagram.com/onthefuze/')
    })
});