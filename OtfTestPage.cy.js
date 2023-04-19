describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 929)
    
       cy.visit('https://www.onthefuze.com/')
       cy.wait(2000)
    
       cy.get('.row-fluid-wrapper > .row-fluid > .span12 > #hs_cos_wrapper_widget_1645815392367 > .hero-section').click()
    
       cy.get('#hs_cos_wrapper_widget_1645815392367 > .hero-section > .content-container > .scroll-test > .hero-button').click()
    
       cy.get('.megamenu > .navigation-primary > .submenu > .megamenu_item-level-1:nth-child(2) > .megamenu_menu-link').click()
    
       cy.get('.megamenu > .navigation-primary > .submenu > .megamenu__active > .megamenu_menu-link').click()
    
       cy.get('.megamenu > .navigation-primary > .submenu > .megamenu_item-level-1:nth-child(2) > .megamenu_menu-link').click()
    
       cy.get('.megamenu > .navigation-primary > .submenu > .megamenu_item-level-1:nth-child(3) > .megamenu_menu-link').click()
    
       cy.visit('https://www.onthefuze.com/pricing')
    
       cy.get('#hs_cos_wrapper_widget_1664825159677_ > #hs_menu_wrapper_widget_1664825159677_ > .active-branch > .hs-menu-item:nth-child(2) > a').click()
    
       cy.visit('https://www.onthefuze.com/testimonials')
    
    })
   
   })
   
   