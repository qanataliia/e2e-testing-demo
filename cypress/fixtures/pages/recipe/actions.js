export const visitRecipePage = () => {
  cy.visit('https://cookidoo.co.uk/recipes/recipe/en-GB/r343843');
  cy.url().should('include', 'recipe');
};