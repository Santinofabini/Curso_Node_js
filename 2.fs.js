const fs = require('node:fs') // se importa el módulo fs de Node.js

const stats = fs.statSync('./archivo.txt') // se obtiene la información del archivo archivo.txt de forma síncrona

console.log(
  stats.isFile(), // devuelve true si es un archivo
  stats.isDirectory(), // devuelve true si es un directorio
  stats.isDirectory(), // devuelve true si es un directorio
  stats.size// devuelve el tamaño del archivo en bytes
) // se muestra la información del archivo en la consola
