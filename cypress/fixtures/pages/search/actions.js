import { SearchContext } from "../../common";
import { selectors } from "./selectors";

export const visitSearchPage = () => {
  cy.visit("/search/en-GB?context=recipes");
  cy.url().should("include", "cookidoo.co.uk");
};

function selectFirstOption() {
  cy.get("ul").find("li").first().click({ force: true });
}

export const searchRecipe = (recipe) => {
  cy.get(selectors.inputField).first().click().type(recipe).type("{enter}");
  selectFirstOption();
};

export const sortByName = () => {
  cy.get(selectors.sortByDropdown)
    .invoke("css", "display", "block")
    .find(selectors.sortByList)
    .eq(5)
    .click();
};

function clickContextDropdown() {
  cy.get(selectors.searchContextDropdown).eq(0).click();
}

export const openCollections = () => {
  clickContextDropdown();
  cy.findByText(SearchContext.collections).click();
  cy.get(selectors.collectionTile).should("be.visible");
};

export const searchCollection = (collection) => {
  cy.get(selectors.inputField).first().click().type(collection).type("{enter}");
  selectFirstOption();
};

export const openArticles = () => {
  clickContextDropdown();
  cy.findByText(SearchContext.articles).click();
  cy.get(selectors.articleTile).should("be.visible");
};

export const searchArticle = (article) => {
  cy.get(selectors.inputField).first().click().type(article).type("{enter}");
  selectFirstOption();
};
