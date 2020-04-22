/// <reference types="Cypress" />
// ***********************************************************
// Todo elemento que es considerado en aspecto un botón ejecuta
// al momento del evento del clic:
// - una impresión en consola de su id y cantidad de ejecuciones
// - El cambio de una propiedad en el estilo de otro botón
// - Para los tres primeros botones del navbar se detiene la propagación de eventos
// ***********************************************************

describe('Test for click events', function() {
  context('It should run the console.info twice when clicking on the any .nav__item', function() {
    beforeEach(function() {
      cy.visit('/');
      cy.get('.nav__item').as('navItems');
      cy.window().then((windowBrowser) => {
        cy.spy(windowBrowser.console, 'info').as('wbLog')
      });
    });

    it('First .nav__item', function() {
      cy.log('Click event without propagation');
      cy.get('@navItems').first().click().get('@wbLog').should('be.calledTwice');
    });

    it('Third .nav__item', function() {
      cy.log('Click event without propagation');
      cy.get('@navItems').eq(2).click().get('@wbLog').should('be.calledTwice');
    });

    it('Last .nav__item', function() {
      cy.log('Click event with propagation');
      cy.get('@navItems').last().click().get('@wbLog').should('be.calledTwice');
    });
  });

  context('This event should change the border style on another button', function() {
    beforeEach(function() {
      cy.visit('/');
    });

    it('Click in the Logo', function() {
      cy.get('.logo').click();
      cy.get('.cards-service a').eq(1).should('have.attr', 'style', 'border: 3px solid red;');
      cy.get('.cards-service a').eq(0).should('not.have.attr', 'style', '');
    });

    it('Click in First Nav Item', function() {
      cy.get('.nav__item').first().click();
      cy.get('.cards-service a').eq(2).should('have.attr', 'style', 'border: 3px solid red;');
      cy.get('.cards-service a').eq(0).should('not.have.attr', 'style', '');
    });

    it('Click in Last Nav Item', function() {
      cy.get('.nav__item').last().click();
      cy.get('.cards-service a').eq(0).should('have.attr', 'style', 'border: 3px solid red;');
      cy.get('.read-more').eq(2).should('have.attr', 'style', 'border: 3px solid red;');
    });

    it('Click in Fourth Card', function() {
      cy.get('.cards-service a').eq(3).click();
      cy.get('.nav__item').eq(0).should('have.attr', 'style', 'border: 3px solid red;');
      cy.get('.nav__item').eq(1).should('not.have.attr', 'style', '');
    });
  });
});