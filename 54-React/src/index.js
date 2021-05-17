// Importa ciertos archivos
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Renderizar los componentes
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Sitio donde se renderiza el componente
  document.getElementById('root')
);

reportWebVitals();
