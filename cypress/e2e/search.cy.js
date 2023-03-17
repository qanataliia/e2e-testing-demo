import { landingPage } from "../fixtures";
import { Recipe } from "../fixtures/common";
import { searchPage } from "../fixtures/pages/search";

describe("Search for Valid Recipe", () => {
  it("Displays Search Results", () => {
    searchPage.visitWebsite();
    landingPage.acceptCookies();
    searchPage.searchRecipe(Recipe.vegetableSoup);
    searchPage.validateSearchResults(Recipe.vegetableSoup);
  });
});
