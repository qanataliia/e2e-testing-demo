import { landingPage } from "../fixtures";

describe("Visit Landing Page", () => {
  it("Accepts Cookies", () => {
    cy.clearAllSessionStorage();
    landingPage.visitWebsite();
    landingPage.acceptCookies();
  });
});

