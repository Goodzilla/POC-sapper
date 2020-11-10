describe('The Home Page', function () {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('has a navigation with 2 elements', function () {
    cy.get('nav').contains('a', 'home');
    cy.get('nav').contains('a', 'about');
  });

  it('loads the first 5 images directly', function () {
    cy.get('img.loaded').should('have.length', 5);
  });
});
