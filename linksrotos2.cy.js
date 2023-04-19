describe('Probar todos los lugares donde se puede hacer clic', () => {
    it('Encuentra y prueba todos los elementos clickeables en una página web', () => {
      // Visita la página de inicio del sitio web
      cy.visit('https://www.benchmark-inc.com/careers')
  
      // Recopila todos los elementos clickeables de la página
      cy.get('[data-cy=clickable]').each((element) => {
        // Haz clic en el elemento
        cy.wrap(element).click()
  
        // Verifica que se haya navegado a la página correcta o que se haya realizado la acción correcta después de hacer clic
        cy.url().should('include', 'https://22536365.fs1.hubspotusercontent-na1.net/hubfs/22536365/Benchmark-CIO-Position-Profile.pdf')
      })
    })
  })