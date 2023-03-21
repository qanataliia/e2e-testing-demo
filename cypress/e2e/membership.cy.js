import { landingPage, membershipPage } from "../fixtures";

describe("Membership Page", () => {
  it("Displays the Correct Membership Price", () => {
    membershipPage.visitMembershipPage();
    landingPage.acceptCookies();
    cy.validatePrice();
  });
});
