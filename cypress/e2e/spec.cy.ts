describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/template.html');
  });

  it('fail', () => {
    cy.get('bl-button').click();
    cy.get('.event').should('contain', 'bl-click');
  });

  it('fail shadow .trigger', () => {
    cy.get('bl-button').shadow().find('button').trigger('click');
    cy.get('.event').should('contain', 'bl-click');
  });

  it('fail shadow .click', () => {
    cy.get('bl-button').shadow().find('button').click();
    cy.get('.event').should('contain', 'bl-click');
  });

  it('fail includeShadowDom', () => {
    cy.get('button').trigger('click');
    cy.get('.event').should('contain', 'bl-click');
  });
});
