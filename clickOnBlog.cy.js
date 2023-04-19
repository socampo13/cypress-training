describe('Enter website', () => {
    it('Enter website', () => {
        cy.visit('https://www.onthefuze.com/blog')

        cy.wait(1500)

        cy.contains('Accept').click()
        cy.get('.container_button_search').click()

        cy.wait(2000)

        cy.contains('Skillsets').click().wait(1500)
        cy.contains('Quality Assurance').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.wait(2000)

        cy.contains('Skillsets').click().wait(1500)
        cy.wait(2000)
        cy.contains('Dedicated Project Manager').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.wait(2000)

        cy.contains('Skillsets').click().wait(1500)
        cy.wait(2000)
        cy.contains('What We Don’t Do').click()
        cy.get('#button_widget_1646343632175').contains('Book A Call').click()

        cy.wait(2000)

        cy.contains('About us').click()
       
        cy.wait(3000)
    })
    
    it('Section', () => {
        cy.visit('https://www.onthefuze.com/blog/tag/digital-design')
        cy.get('.mb-2')
        cy.contains('Read More').click()
        cy.contains('Accept').click()

        cy.wait(3000)
    }
    )
});