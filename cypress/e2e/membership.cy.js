import { landingPage, membershipPage } from "../fixtures";

describe("Membership Page", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage();
    membershipPage.visitMembershipPage();
    landingPage.acceptCookies();
  });
  it("Displays the Correct Membership Price", () => {
    cy.validatePrice();
  });
  it("Trial Button Redirects to Sign Up Page", () => {
    membershipPage.clickFreeTrialButton();
  });
});
