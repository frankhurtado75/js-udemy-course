let elemento;

//Documento a traves del dom
elemento = document; //Manejo del documento
elemento = document.all; //Todo el documento
elemento = document.head; //Acceder al head 
elemento = document.body; //Acceder al body
elemento = document.domain; //Dominio de la pagina

//Formulario a traves del dom
elemento = document.forms; //Formularios de la pagina
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

//Enlaces a traves del dom
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

//Imagenes a traves del dom
elemento = document.images; //Cuantas imagenes hay

//Script a traves del dom
elemento = document.scripts; //Cuantos scripts hay

console.log(elemento);