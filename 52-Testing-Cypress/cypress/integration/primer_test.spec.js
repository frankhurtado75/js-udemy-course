/// <reference types="cypress" />

describe('Carga la página principal ', () => {
    it('Carga la página principal ', () => {
        // URL de la web
        cy.visit('http://127.0.0.1:5500/');

        // Verifica si un elemento del DOM contiene el texto expecifico 
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // .get obtiene un elemento del DOM verifica si existe
        // Se recomienda agregar el atributo 'data-cy' en el HTML para mantener buenas practicas
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verifica si existe un elemento y contenga un texto expecifico
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // Verifica el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
    });
});