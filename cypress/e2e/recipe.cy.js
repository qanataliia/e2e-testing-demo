import { recipePage } from "../fixtures/pages/recipe";

describe('Recipe', () => {
    it('Displays information about a recipe', () => {
        cy.visit('https://cookidoo.co.uk/recipe/en-GB/r1070/vegetable-soup');
        recipePage.validateContent();
    });
});