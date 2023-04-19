const { getComputedStyle } = 'cypress';

describe('Mi prueba', () => {
    it('Verificar tamaños de imagenes, colores y paddings', () => {
        cy.visit('https://landing.horizonthemedev.com/electrodomesticos-samsung')
        //TAMAÑO DE IMAGEN
        cy.get('.background-image').should(($img) => {
            expect($img[0].naturalWidth).to.be.closeTo(800, 10);
            expect($img[0].naturalHeight).to.be.closeTo(600, 10);
        });

        // COLOR DE UN ELEMENTO
        cy.get('.dnd_area-row-2-background-color').should(($el) => {
            const bgColor = getComputedStyle($el[0]).getPropertyValue('background-color');
            expect(bgColor).to.equal('#eeeeee');
        });

        // TAMAÑOS DE PADDING DE UNA SECCIÓN
        cy.get('#mi-seccion').should(($el) => {
            const paddingTop = parseInt(getComputedStyle($el[0]).getPropertyValue('padding-top'), 10);
            const paddingRight = parseInt(getComputedStyle($el[0]).getPropertyValue('padding-right'), 10);
            const paddingBottom = parseInt(getComputedStyle($el[0]).getPropertyValue('padding-bottom'), 10);
            const paddingLeft = parseInt(getComputedStyle($el[0]).getPropertyValue('padding-left'), 10);

            expect(paddingTop).to.equal(10);
            expect(paddingRight).to.equal(20);
            expect(paddingBottom).to.equal(10);
            expect(paddingLeft).to.equal(20);
        });
    });
});

//VERIFICAR PREVIAMENTE LAS CLASES, ID DE LOS ELEMENTOS A REVISAR



