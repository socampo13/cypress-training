describe('Buscar enlaces rotos', () => {
  it('Encuentra todos los enlaces rotos en un sitio web', () => {
    // Visita la página de inicio del sitio web
    cy.visit('https://www.benchmark-inc.com')

    // Recopila todos los enlaces de la página
    cy.get('a').each((link) => {
      // Comprueba si el enlace está roto
      cy.request(link.prop('href')).then((response) => {
        expect(response.status).not.to.equal(404)
      })
    })
  })
})