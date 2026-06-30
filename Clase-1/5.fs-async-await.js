/* const fs = require('fs/promises');
const data = await fs.readFile('archivo.txt', 'utf8');
console.log(data); */// Esto da error porque no se puede usar await fuera de una función asíncrona en CommonJS

// Para usar await, debemos envolverlo en una función asíncrona
const { readFile } = require('fs/promises'); // se importa la función readFile del módulo fs/promises de Node.js
// IIFE (Immediately Invoked Function Expression)
(async () => {
  const data = await readFile('archivo.txt', 'utf8') // se lee el contenido del archivo archivo.txt de forma asíncrona y se guarda en la variable data
  console.log(data) // se muestra el contenido del archivo en la consola
  console.log('Hace algo mientras..')
  console.log('leyendo el contenido del segundo archivo...')
  const data2 = await readFile('archivo2.txt', 'utf8')
  console.log(data2)
})() // se ejecuta la función asíncrona de forma inmediata,anonima y autoejecutable
(async function init () {
  const data = await readFile('archivo.txt', 'utf8')
  console.log(data)
  console.log('Hace algo mientras..')
  console.log('leyendo el contenido del segundo archivo...')
  const data2 = await readFile('archivo2.txt', 'utf8')
  console.log(data2)
})() // se ejecuta la función asíncrona de forma inmediata, con nombre y autoejecutable

init() // se llama a la función init para que se ejecute, aunque no es necesario porque ya se ejecuta de forma inmediata con los paréntesis al final de la función
