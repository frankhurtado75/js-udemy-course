// El nombre de los archivos de los componentes van en mayuscula
import React from 'react';
import {Fragment} from 'react';

// Props: Propiedades del componente
const Header = ({titulo}) => (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    )

export default Header;
