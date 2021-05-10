import Citas from '../js/classes/Citas';

describe('Probar la clase de citas', () => {
    
    const citas = new Citas();

    const id = Date.now();
    
    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Bob',
            propietario: 'Frank',
            telefono: '0414',
            fecha: '10-12-2000',
            hora:'10:30',
            sintomas: 'Tos'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });
    
    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo mascota',
            propietario: 'Frank',
            telefono: '0414',
            fecha: '10-12-2000',
            hora:'10:30',
            sintomas: 'Tos'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
});