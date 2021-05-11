Cypress

'npm init' para crear el package.json

'npm i --save-dev cypress' para instalar cypress

npx no instala la dependencia en la computadora.

'npx cypress open' para abrir la app de escritorio

'npx cypress run' lo ejecuta desde la terminal

Todos los archivos de cypress deben tener la extension del archivos .spec.js
Ejemplo: ejemplo.spec.js

Cypress utiliza unicamente 'it' dentro de 'describe' a diferencia de jest que tambien usa 'test'

'/// <reference types="cypress" />' para mejorar el autocompletado 

Cypress crea videos al ejecutarse de forma automatica, para mejorar la calidad de los videos se ingresa a 
cypress.json y se agrega "videoCompression":0 . Los valores son de 0 a 51 donde 0 es la calidad más alta

cy.screenshot(); permite tomar una captura de pantalla al ejecutarse