describe('checkHomePage', () => {
    beforeEach(()=>{
      cy.visit('https://theconnectedshop.com', {
        onBeforeLoad: (win) => {
          cy.stub(win.console, 'error').as('consoleError')
        },
        failOnStatusCode: false 
      })  
    });


  it('Open home page', () => {
    cy.title().should(
      'include',
      'The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office'
    );
    cy.url().should('eql', 'https://theconnectedshop.com/');
    cy.get('body').should('be.visible');
  });

  it('Check Logo',() =>{
  //logo check url
    cy.get('.Header__LogoLink')
    .should('exist')      //без этого не проходили тесты
    .should('be.visible')
    .and('have.attr', 'href', '/');
  // logo primary check
    cy.get('.Header__LogoImage--primary')
    .should('exist')
    .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137')
    // .should('include', 'The_Connected_Shop_250x.png')
    .and('have.attr', 'width', '250')
    .and('have.attr', 'height', '75px');
  // logo transparent check
    cy.get('.Header__LogoImage--transparent')
    .should('be.visible')
    .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163')
    .and('have.attr', 'width', '250')
    .and('have.attr', 'height', '75px');
    // .should('include', 'The_Connected_Shop_logo_250x.png');
  });
});
