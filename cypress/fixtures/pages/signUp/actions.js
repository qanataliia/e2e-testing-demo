import { selectors } from "./selectors";
import { faker } from "@faker-js/faker";

export const fillSignUpForm = () => {
    cy.location('https://login.vorwerk.com', () => {   
        cy.get(selectors.emailInput).click().type(faker.internet.email());
        cy.get(selectors.passwordInput).click().type(faker.internet.password()).should('have.value');
        cy.check(selectors.termsCheckbox).should('be.checked');
    });
};