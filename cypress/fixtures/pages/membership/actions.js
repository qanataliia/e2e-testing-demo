export const visitMembershipPage = () => {
  cy.visit("/foundation/en-GB/membership");
  cy.url().should("include", "/membership");
};
