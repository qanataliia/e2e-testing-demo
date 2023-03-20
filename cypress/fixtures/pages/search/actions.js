import { SortOptions } from "../../common";
import { selectors } from "./selectors";

export const visitSearchPage = () => {
  cy.visit("/search/en-GB?context=recipes");
  cy.url().should("include", "cookidoo.co.uk");
};

export const searchRecipe = (recipe) => {
  cy.get(selectors.inputField).first().click().type(recipe).type("{enter}");
  cy.get("ul").find("li").first().click({ force: true });
};

export const sortByName = () => {
  cy.get(selectors.sortByDropdown)
    .invoke("css", "display", "block")
    .find(selectors.sortByList)
    .eq(5)
    .click();
};
