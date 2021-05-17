// Este archivo contiene los componentes

// Modulo para importar archivos
// Fragment permite agrupar elementos sin necesidad de usar HTML como un div
import {useState, Fragment} from 'react'; 
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App(){
  // Definir el state

  /* El estado devuelve una lista de 2 posiciones. useState devuelve un array de 2 posiciones desde el valor inicial 
  Posición 1: valor del estado y Posición 2: método que al ejecutar actualiza el estado.
  Los hooks no pueden ir dentro de condicionales */
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Componentes condicionales
  let componente; 

  if(cargando){
    componente = <Spinner/>
  } else if(total === 0){
    componente = <Mensaje/>
  } else {
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
  }

  return(
    <Fragment> {/*Sistaxis para llamar a un componente*/}
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

// Modulo para exportar componente
export default App;
