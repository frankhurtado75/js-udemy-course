/// <reference types="cypress" />
describe('Llena los campos para una nueva cita y la muestra', () => {
    it('Campos nueva cita', () => {

        cy.visit('/index.html');

        // Simulación de inputs del formulario
        cy.get('[data-cy="mascota-input"]')
            .type('Bob');

        cy.get('[data-cy="propietario-input"]')
            .type('Franklin');

        cy.get('[data-cy="telefono-input"]')
            .type('04144624884');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-05-11');

        cy.get('[data-cy="hora-input"]')
            .type('07:00');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Vomito');

        // Simulación del click
        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
    
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');
    });
});