import { landingPage } from "../fixtures";
import { selectors } from "../fixtures/pages/landing/selectors";

describe("Visit Landing Page", () => {
  it("Accepts Cookies", () => {
    cy.clearAllSessionStorage();
    landingPage.visitWebsite();
    landingPage.acceptCookies();
  });
  it("Validate Landing Page", () => {
    landingPage.clickFreeTrialButton();
  });
});

describe("Change Language", () => {
  it.only("Changes Language to German", () => {
    cy.clearAllSessionStorage();
    landingPage.visitWebsite();
    cy.acceptCookies();
    cy.get(selectors.languageButton)
      .scrollIntoView()
      .should("be.visible")
      .click();
    // landingPage.changeLanguage();
  });
});
