import { faker } from "@faker-js/faker";
import { landingPage } from "../fixtures";
import { Article, Collection, Recipe } from "../fixtures/common";
import { searchPage } from "../fixtures/pages/search";

describe("Change Search Context", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage();
    searchPage.visitSearchPage();
    landingPage.acceptCookies();
  });
  it("Displays Search Results for Recipes", () => {
    searchPage.searchRecipe(Recipe.vegetableSoup);
    searchPage.validateSearchResults(Recipe.vegetableSoup);
  });
  it("Displays Search Results for Collections", () => {
    searchPage.openCollections();
    searchPage.searchCollection(Collection.breakfast);
  });
  it("Displays Search Results for Articles", () => {
    searchPage.openArticles();
    searchPage.searchArticle(Article.inspiration);
  });
});

describe("Change Recipe Sorting", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage();
    searchPage.visitSearchPage();
    landingPage.acceptCookies();
  });
  it("Sorts Recipes by Name", () => {
    searchPage.sortByName();
  });
});

describe("Search for Invalid Recipe", () => {
  it("Displays an Error Message", () => {
    cy.clearAllSessionStorage();
    searchPage.visitSearchPage();
    landingPage.acceptCookies();
    searchPage.searchRecipe(faker.commerce.productName());
    searchPage.validateErrorMessage();
  });
});
