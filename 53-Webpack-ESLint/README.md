// Webpack copila 'assets' en un bundle. Permite empaquetar el código
Tambíen permite crear un servidor y un hot reload
'npm i --save-dev webpack webpack-cli' para la instalación

Se crea el archivo 'webpack.config.js'

se añade al package.json dentro del script "webpack": "webpack"

npm run webpack

Para crear un servidor en webpack 'npm i --save-dev webpack serve'
Y se agrega en el package.json dentro de los script "dev": "webpack serve"
'npm run dev' para arrancar el servidor

// Babel permite soportar la sintaxis de JS en navegadores antiguos
'npm i --save-dev @babel/cli @babel/core @babel/preset-env' para la instalación

babel-loader funciona como un puglin. Se instala con 'npm i --save-dev babel-loader'

Para transpilar el archivo.js a el archivo2.js para que pueda ser soportado por antiguos navegadores
'npx babel archivo.js --out-file archivo2.js --presets=@babel/preset-env' 

o dentro del package.json dentro del script agregar "babel archivo.js --out-file archivo2.js --presets=@babel/preset-env"
y se ejecuta con npm run babel

// ESLint permite solucionar problemas en el código y seguir buenas prácticas
ESLint permite instalar una guía de estilos como Airbnb

