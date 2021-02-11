import Citas from './class/Citas.js';
import UI from './class/UI.js';

import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js';

const ui = new UI();
const administrarCitas = new Citas();
let editando = false;

// Objeto con la informacion de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto de cita
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

// Valida y agerga una nueva cita a la clase de cita
export function nuevaCita(e){
    e.preventDefault();

    // Extraer informacion del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validar 
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente');

        // Pasar el objeto cita a edición
        administrarCitas.editarCita({...citaObj});

        // Regresa el texto del botón a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

        // Quitar modo edición  
        editando = false;

    } else {
        // Generar un id único
        citaObj.id = Date.now();

        // Creando una nueva cita
        administrarCitas.agregarCita({...citaObj});

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente');
    }

    // Reiniciar el objeto para la validación
    reiniciarObjeto();

    // Reinicar el formulario
    formulario.reset();

    // Mostrar HTML de la cita
    ui.imprimirCitas(administrarCitas);
}

// Reiniciar el objet
export function reiniciarObjeto(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id){
    // Eliminar la cita
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente');

    //Refresca las citas
    ui.imprimirCitas(administrarCitas);
}

// Carga los datos y el modo edición
export function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    // Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;
}