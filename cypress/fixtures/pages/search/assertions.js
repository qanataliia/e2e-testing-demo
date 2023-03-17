import { selectors } from "./selectors";

export const validateSearchResults = (recipe) => {
  cy.get(selectors.searchResult)
    .contains(recipe)
    .should("be.visible");
};