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
    // cy.get('li.HorizontalList__Item').should('have.attr', 'href', '/account');
    //check search link
    cy.get("li.HorizontalList__Item").should("have.attr", "href", "/search");
    //check cart link
    cy.get("li.HorizontalList__Item").should("have.attr", "href", "/cart");
  });
});
