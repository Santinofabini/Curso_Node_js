const fs = require('node:fs'); //se importa el módulo fs de Node.js

console.log("Leyendo el contenido del archivo...");

//const text = fs.readFileSync('./archivo.txt', 'utf-8'); //se lee el contenido del archivo archivo.txt de forma síncrona y se guarda en la variable text
//Asincrono
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Primer texto:', text);
});

console.log("Hace algo mientras..");
console.log("leyendo el contenido del segundo archivo...");
/*const text2 = fs.readFileSync('./archivo2.txt', 'utf-8'); //se lee el contenido del archivo archivo2.txt de forma síncrona y se guarda en la variable text2
console.log(text2);*/

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto:', text);
});
//const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');
//console.log(text2);