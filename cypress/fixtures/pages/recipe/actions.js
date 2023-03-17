export const visitWebsite = () => {
  cy.visit('https://cookidoo.co.uk/recipe/en-GB/r1070/vegetable-soup');
  cy.url().should('include', 'recipe');
};