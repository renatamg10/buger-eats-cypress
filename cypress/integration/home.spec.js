describe('home page', () => {
    it('app deve ficar online', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})