
describe('Search function testing', () =>{
    beforeEach(()=>{
        cy.viewport(1920, 1080);
        cy.visit('https://theconnectedshop.com/', { timeout: 15000 }); 
        cy.window().its('document.readyState').should('eq', 'complete');
        cy.get('#shopify-pc__banner__btn-accept').click();
        cy.get('a[href="/search"].Heading.Link--primary.Text--subdued.u-h8')
        .click();
    });
    it('searching of existing item',()=>{
        cy.get('input[name="q"]')
        .type('Smart Pool Water')
        .should('have.value', 'Smart Pool Water');
        cy.get('.Segment__Content > .Grid > .Grid__Cell > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .ProductItem__Title > a', { timeout: 9000 })
        .contains('Smart Pool Water') //Pool Water Controller
        .should('exist');
    });
    // it('searching of non existing item',()=>{
    //     cy.get('input[name="q"]')
    //     .type('boot')
    //     .should('have.value', 'boot');
    //     cy.get('.Search__Results')
    //     .find('.ProductItem')
    //     .should('not.exist');
    //     cy.get('div.Segment')
    //     .contains('No results could be found') 
    //     .should('exist');
    // });
});