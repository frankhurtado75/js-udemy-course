## Webpack 
Copila 'assets' en un bundle. Permite empaquetar el código
Tambíen permite crear un servidor y un hot reload
**npm i --save-dev webpack webpack-cli** para la instalación

Se crea el archivo **webpack.config.js**

se añade al package.json dentro del script **"webpack": "webpack"**

**npm run webpack**

Para crear un servidor en webpack **npm i --save-dev webpack serve**
Y se agrega en el package.json dentro de los script **"dev": "webpack serve"**
**npm run dev** para arrancar el servidor

**"watch": "webpack -w"** Dentro del package.json permite hacer cambios sin tener que volver a copilar pero actualizando
Se ejecuta con **npm run watch**

**npm i --save-dev concurrently** para correr dos o más scripts del package.json al mismo tiempo
Se modifica el package.json **"dev": "dev": "concurrently --kill-others \"npm run watch\" \"webpack server\""**
Se agrega en el devServer de webpack.config.js:
    **publicPath: "/public/js/",**
    **watchContentBase: true**
## Babel
Permite soportar la sintaxis de JS en navegadores antiguos
**npm i --save-dev @babel/cli @babel/core @babel/preset-env** para la instalación

babel-loader funciona como un puglin. Se instala con **npm i --save-dev babel-loader**

Para transpilar el archivo.js a el archivo2.js para que pueda ser soportado por antiguos navegadores
**npx babel archivo.js --out-file archivo2.js --presets=@babel/preset-env** 

o dentro del package.json dentro del script agregar **babel archivo.js --out-file archivo2.js --presets=@babel/preset-env**
y se ejecuta con **npm run babel**

## ESLint 
Permite solucionar problemas en el código y seguir buenas prácticas
ESLint permite instalar una guía de estilos como Airbnb

**npm i --save-dev** para la instalación 
**npx eslint --init** crea el archivo de eslint

**npm i --save-dev eslint-loader** para corregir errores con webpack
En webpack.config.json dentro de modules => rules, se agrega la configuración con un arreglo nuevo
{
    enforce: 'pre',
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: 'eslint-loader',
    options: {
        fix: true
    }
}