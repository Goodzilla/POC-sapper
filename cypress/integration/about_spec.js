describe('The About Page', function () {
  it('successfully loads', () => {
    cy.visit('/about');
  });

  it('has a the correct wording', function () {
    cy.get('p').contains('This is a proof of concept for Phoenix with Sapper');
  });
});
