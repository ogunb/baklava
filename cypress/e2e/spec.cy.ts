// import 'cypress';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/template.html');
  });

  it('fail', () => {
    cy.get('bl-button').click();
    cy.get('.log').should('contain', 'bl-click');
  });

  it('fail shadow .trigger', () => {
    cy.get('bl-button').shadow().find('button').trigger('click');
    cy.get('.log').should('contain', 'bl-click');
  });

  it('fail shadow .click', () => {
    cy.get('bl-button').shadow().find('button').click();
    cy.get('.log').should('contain', 'bl-click');
  });

  it('fail includeShadowDom', () => {
    cy.get('button').trigger('click');
    cy.get('.log').should('contain', 'bl-click');
  });

  it('success { position: "top" }', () => {
    cy.get('bl-button').click({ position: 'top' });
    cy.get('.log').should('contain', 'bl-click');
  });

  it('success shadow { position: "top" }', () => {
    cy.get('bl-button').shadow().find('button').click({ position: 'topRight' });
    cy.get('.log').should('contain', 'bl-click');
  });
});
