// Permite referenciar la ubicación del archivo
const path = require('path');

module.exports = {
    // Archivo principal (entrada)
    entry: './js/app.js',
    // Salida
    output: {
        path: path.resolve(__dirname, 'public/js'),
        // Archivo donde se copila todo
        filename: 'bundle.js'
    },
    // Modo de producción (defaultd) o desarrollo (development)
    mode: 'development',
    // Configuración del servidor
    devServer: {
        // Carpeta del contenido
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        publicPath: "/public/js/",
        watchContentBase: true
    },
    // Configuración de loaders
    module: {
        rules: [
            {
                // Busta todos los archivos de JS
                test: /\.js$/,
                // Excluye los JS de node_modules
                exclude: /(node_modules)/,
                use: {
                    // Loader que se va a usar
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            }
        ]
    }
}