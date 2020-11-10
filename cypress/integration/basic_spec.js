describe("Basic test", function () {
  it("Visits the root URL", function () {
    cy.visit("/");

    cy.get("nav").contains("a", "home");
  });
});
