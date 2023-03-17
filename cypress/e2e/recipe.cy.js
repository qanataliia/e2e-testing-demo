import { recipePage } from "../fixtures/pages/recipe";

describe("Recipe", () => {
  it("Displays information about a recipe", () => {
    recipePage.visitWebsite();
    recipePage.validateContent();
  });
});
