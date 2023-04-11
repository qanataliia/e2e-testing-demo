import { selectors } from "./selectors";

export const validateContent = () => {
  cy.url().should("include", "/recipe");
  cy.get(selectors.recipeCard).should("be.visible");
  cy.get("img").should("be.visible");
  cy.get("button").should("be.enabled");
};

export const validateIngredients = () => {
  cy.get(selectors.ingredientsTitle).should("be.visible");
  cy.get("li").should("be.visible");
};
