# Node.JS
Es un entorno de codigo avierto para crear app en el servidor (backend)
Crea el package.json ```npm init```

## Express y nodemon
Instala el framework de node.js ```npm install express```

Instala nodemon que permite reiniciar el servidor al detectar cambios ```npm install --save-dev nodemon```
Luego de modificar el script del package.json ejecutamos el script para el servidor ```npm run dev```

Para usar los modulos con express se debe modificar el package.json con ```"type": "module"``

Para instalar el template engines se ejecuta el comando ```npm install pug```
Para habilitar el archivo ```app.set('view engine', 'pug');```

## Base de datos
```npm install mysql2 sequelize```

## Deployment
Dependencia de variable de entorno para funcionar Heroku ```npm install --save-dev dotenv```