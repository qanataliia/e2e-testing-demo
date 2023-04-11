import { selectors } from "./selectors";

export const validateContent = () => {
  cy.url().should("include", "/recipe");
  cy.get(selectors.recipeCard).should("be.visible");
  assertIconsVisibility();
};

export const validateIngredients = () => {
  cy.get(selectors.ingredientsTitle).should("be.visible");
  cy.get("li").should("be.visible");
};

function assertIconsVisibility() {
  for (const icon in selectors.icons) {
    cy.get(selectors.icons[icon]).should("be.visible");
  }
}
