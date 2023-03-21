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
