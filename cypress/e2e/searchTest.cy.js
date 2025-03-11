
describe('Search function testing', () =>{
    beforeEach(()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://theconnectedshop.com/'); 
        cy.window().its('document.readyState').should('eq', 'complete');
        cy.get('a[href="/search"].Heading.Link--primary.Text--subdued.u-h8')
        .click();
    });
    it('searching of existing item',()=>{
        cy.get('input[name="q"]')
        .type('Smart Pool Water')
        .should('have.value', 'Smart Pool Water');
    });
});