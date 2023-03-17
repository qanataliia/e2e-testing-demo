import { landingPage } from "../fixtures";

describe.skip("Visit Landing Page", () => {
  it("Accept Cookies", () => {
    cy.clearAllSessionStorage();
    landingPage.visitLandingPage();
    landingPage.acceptCookies();
  });
});

describe("Register a New User", () => {
  it("Sign Up", () => {
     landingPage.visitLandingPage();
     landingPage.clickAuthenticationButton();
     landingPage.fillSignUpForm();
  });
});
