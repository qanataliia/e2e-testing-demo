import { selectors } from "./selectors";

export const visitMembershipPage = () => {
  cy.visit("/foundation/en-GB/membership");
  cy.url().should("include", "/membership");
};

export const clickFreeTrialButton = () => {
  cy.get(selectors.tryForFreeButton).should("be.visible").click();
};
