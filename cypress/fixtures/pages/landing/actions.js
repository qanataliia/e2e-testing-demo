import { selectors } from "./selectors";
import { faker } from "@faker-js/faker";

export const visitLandingPage = () => {
    cy.visit("https://cookidoo.co.uk/foundation/en-GB");
    cy.url().should("include", "cookidoo.co.uk");
};

export const acceptCookies = () => {
    cy.get(selectors.cookiesAlert).should('be.visible');
    cy.get(selectors.acceptCookiesButton).should('be.enabled').click();
    cy.get(selectors.cookiesAlert).should('not.be.visible');
};

export const clickAuthenticationButton = () => {
    cy.get(selectors.authenticationButton).contains('Sign up').click();
    cy.location('https://login.vorwerk.com', () => {
    cy.get(signUpForm).should('be.visible');
    });
};