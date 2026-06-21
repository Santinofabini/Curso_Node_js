const fs = require('node:fs'); //se importa el módulo fs de Node.js

fs.readdir('.', (err, files) => { //se lee el contenido del directorio actual de forma asíncrona y se guarda en la variable files
    if (err) {
        console.error('Eerror al leer el directorio:', err); //si hay un error, se muestra en la consola
        return;
    }
    console.log('Archivos en el directorio:', files); //se muestra la lista de archivos en la consola
}); 