/// <reference types="cypress" />
describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('http://127.0.0.1:5500/');

        cy.get('[data-cy="formulario"]')
            .submit();

        // Selecciona la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        // Verifica que se agrega una clase al elemento
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger');
    });
});