import { faker } from "@faker-js/faker";
import { landingPage } from "../fixtures";
import { Recipe } from "../fixtures/common";
import { searchPage } from "../fixtures/pages/search";
import { selectors } from "../fixtures/pages/search/selectors";

describe("Search for Valid Recipe", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage();
    searchPage.visitWebsite();
  });
  it("Displays Search Results", () => {
    landingPage.acceptCookies();
    searchPage.searchRecipe(Recipe.vegetableSoup);
    searchPage.validateSearchResults(Recipe.vegetableSoup);
  });
  it("Sorts Recipes by Name", () => {
    searchPage.sortByName();
  });
});

describe("Search for Invalid Recipe", () => {
  it("Displays an Error Message", () => {
    cy.clearAllSessionStorage();
    searchPage.visitWebsite();
    landingPage.acceptCookies();
    searchPage.searchRecipe(faker.commerce.productName());
    searchPage.validateErrorMessage();
  });
});
