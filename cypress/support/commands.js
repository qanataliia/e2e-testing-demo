import { selectors } from "../fixtures/pages/landing/selectors";

Cypress.Commands.add("validatePrice", () => {
  cy.get("p strong")
    .contains("£40/€48 per year")
    .then(($strong) => {
      const strongText = $strong.text();
      const prices = strongText.match(/(\d+)/g);
      expect(prices).to.have.length(2);
      expect(prices[0]).to.equal("40");
      expect(prices[1]).to.equal("48");
    });
});

Cypress.Commands.add('validateRedirection', (originalUrl, redirectedUrl) => {
    cy.visit(originalUrl, {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('windowOpen');
      },
    });
    cy.get(':nth-child(7) > .button--primary').click();
    cy.get('@windowOpen').should('be.calledWith', redirectedUrl);
  });

Cypress.Commands.add('acceptCookies', () => {
      cy.get(selectors.cookiesAlert).should("be.visible");
      cy.get(selectors.acceptCookiesButton).should("be.enabled").click();
      cy.get(selectors.cookiesAlert).should("not.be.visible");
    });