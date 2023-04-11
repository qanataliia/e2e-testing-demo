import { recipePage } from "../fixtures/pages/recipe";

describe("Recipe", () => {
  before(() => {
    cy.clearAllCookies();
    recipePage.visitRecipePage();
    cy.acceptCookies();
  });
  it("Displays a Recipe", () => {
    recipePage.validateContent();
    recipePage.validateIngredients();
  });
});
