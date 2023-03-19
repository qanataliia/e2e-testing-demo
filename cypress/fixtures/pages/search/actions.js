import { selectors } from "./selectors";

export const visitWebsite = () => {
  cy.visit("/search/en-GB?context=recipes");
  cy.url().should("include", "cookidoo.co.uk");
};

export const searchRecipe = (recipe) => {
  cy.get(selectors.inputField).first().click().type(recipe).type("{enter}");
  cy.get("ul").find("li").first().click({ force: true });
};

export const sortByName = () => {
  cy.get(".sortby-box").should("be.visible").contains("Relevance").click();
  cy.findByText("Name").should("be.visible").click();
};
