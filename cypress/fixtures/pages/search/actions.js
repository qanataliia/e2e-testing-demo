import { selectors } from "./selectors";

export const visitWebsite = () => {
    cy.visit("/search/en-GB?context=recipes");
    cy.url().should("include", "cookidoo.co.uk");
};

export const searchRecipe = (recipe) => {
  cy.get(selectors.inputField).first().click().type(recipe).type("{enter}");
};
