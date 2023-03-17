import { selectors } from "./selectors";

export const searchRecipe = (recipe) => {
  cy.get(selectors.inputField).first().click().type(recipe).type("{enter}");
};
