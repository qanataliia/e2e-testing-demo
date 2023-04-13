import { selectors } from "./selectors";

export const visitWebsite = () => {
  cy.visit("/foundation/en-GB");
  cy.url().should("include", "cookidoo.co.uk");
};

export const acceptCookies = () => {
  cy.get(selectors.cookiesAlert).should("be.visible");
  cy.get(selectors.acceptCookiesButton).should("be.enabled").click();
  cy.get(selectors.cookiesAlert).should("not.be.visible");
};

export const clickAuthenticationButton = () => {
  cy.get(selectors.authenticationButton).contains("Sign up").click();
  cy.location("https://login.vorwerk.com", () => {
    cy.get(signUpForm).should("be.visible");
  });
};

export const clickFreeTrialButton = () => {
  cy.get(selectors.tryForFreeButton).should("be.enabled").click();
};

export const changeLanguage = () => {
  cy.get(selectors.languageButton)
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.get(selectors.languageList).contains("Deutsch").click();
  cy.get(selectors.languageButton).contains("Deutsch").should("be.visible");
};
