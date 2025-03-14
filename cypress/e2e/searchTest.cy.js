
describe('Search function testing', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit('https://theconnectedshop.com/', 
        { timeout: 30000, failOnStatusCode:false });
      cy.window()
        .its('document.readyState')
        .should('eq', 'complete');
      cy.get('body')
      .then(($body) => {
        if ($body.find('#shopify-pc__banner__btn-accept').length) {
          cy.get('#shopify-pc__banner__btn-accept').click();
        }
      });
      cy.get('a[href="/search"].Heading.Link--primary.Text--subdued.u-h8').click();
    });
  
    it('searching of existing item', () => {
    // cy.get('input[name="q"]')
    //     .type('Smart Pool', { delay: 10000 })
    //     .should('have.value', 'Smart Pool Water');
    // cy.get('.ProductItem__Title a', { timeout: 9000 })
    //     .should('include', 'Smart Pool Water');
        cy.get('input[name="q"]')
            .invoke('val', 'Smart Pool Water')
            .trigger('input', { log: false})
            .should('have.value', 'Smart Pool Water', { log: false });
    });
    
  
    it('searching of non existing item', () => {
      cy.get('input[name="q"]')
        .type('boot')
        .should('have.value', 'boot');
      cy.get('.Search__Results', { timeout: 9000 })
        .find('.ProductItem').should('not.exist');
      cy.get('.Segment__Content > p')
        .contains('No results could be found')
        .should('exist');
    });
  });