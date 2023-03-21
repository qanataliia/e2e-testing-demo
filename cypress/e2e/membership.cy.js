import { landingPage, membershipPage } from "../fixtures";

describe("Membership Page", () => {
  it("Displays the Correct Membership Price", () => {
    membershipPage.visitMembershipPage();
    landingPage.acceptCookies();
    cy.validatePrice();
  });
  it("Trial Button Redirects to Sign Up Page", () => {
    membershipPage.visitMembershipPage();
    landingPage.acceptCookies();
    cy.get(".button--outline-primary").click();
  });
});
