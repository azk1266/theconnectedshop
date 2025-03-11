describe("Small menu check", () => {
  beforeEach(() => {
    cy.visit("https://theconnectedshop.com/");
    cy.viewport(1920, 1080);
    cy.timeout(1000);
  });
  it("should contain three <li> elements: Account, Search, Cart", () => {
    cy.get(".HorizontalList--spacingLoose.HorizontalList.hidden-pocket", {
      timeout: 10000,
    })
      .find("li a")
      .should("have.length", 3)
      .then((links) => {
        expect(links[0]).to.contain.text("Account");
        expect(links[1]).to.contain.text("Search");
        expect(links[2]).to.contain.text("Cart");
      });
    //check account link
    cy.get('[href="/account"].Heading.Link--primary.Text--subdued.u-h8')
      .should('have.attr', 'href', '/account')
      .and('be.visible');
    //check search link
    cy.get('[href="/search"].Heading.Link--primary.Text--subdued.u-h8')
      .should("have.attr", "href", "/search")
      .and('be.visible');
    //check cart link
    cy.get('[href="/cart"].Heading.u-h6')
      .should("have.attr", "href", "/cart")
      .and('be.visible');
  });
});
