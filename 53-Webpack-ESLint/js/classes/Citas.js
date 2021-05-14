// CLasses
// eslint-disable-next-line no-irregular-whitespace
class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  editarCita(citaActualizada) {
    // eslint-disable-next-line max-len
    this.citas = this.citas.map((cita) => (cita.id === citaActualizada.id ? citaActualizada : cita));
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
}

export default Citas;
