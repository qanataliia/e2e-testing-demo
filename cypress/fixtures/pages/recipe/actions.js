export const visitWebsite = () => {
  cy.visit('/recipe/en-GB/r1070/vegetable-soup');
  cy.url().should('include', 'recipe');
};