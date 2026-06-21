const fs = require('node:fs/promises'); //se importa el módulo fs/promises de Node.js
fs.readFile('./archivo.txt', 'utf-8') //se lee el contenido del archivo archivo.txt de forma asíncrona y se devuelve una promesa
    .then(text => console.log('Primer texto:', text)) //si la promesa se resuelve correctamente, se muestra el contenido del archivo en la consola
    .catch(err => console.error('Error al leer el archivo:', err)); //si la promesa se rechaza, se muestra un mensaje de error en la consola

console.log("Hace algo mientras..");
console.log("leyendo el contenido del segundo archivo...");
    fs.readFile('./archivo2.txt', 'utf-8') //se lee el contenido del archivo archivo2.txt de forma asíncrona y se devuelve una promesa
    .then(text => console.log('Segundo texto:', text)) //si la promesa se resuelve correctamente, se muestra el contenido del archivo en la consola
    .catch(err => console.error('Error al leer el archivo:', err)); //si la promesa se rechaza, se muestra un mensaje de error en la consola