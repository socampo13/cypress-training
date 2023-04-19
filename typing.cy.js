describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 929)
    
       cy.visit('https://www.amazon.com/')
    
       cy.get('#nav-search > #nav-search-bar-form > .nav-fill > .nav-search-field > #twotabsearchtextbox').click()
    
       cy.get('#nav-search > #nav-search-bar-form > .nav-fill > .nav-search-field > #twotabsearchtextbox').type('hot wheels')
    
       cy.visit('https://www.amazon.com/s?k=hot+wheels&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1S7FLNGG6NWEW&sprefix=hot+wheels%2Caps%2C158&ref=nb_sb_noss_1')
    
    })
   
   })
   