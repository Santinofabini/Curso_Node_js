import { readFile } from 'node:fs/promises' // se importa la función readFile del módulo fs/promises de Node.js

const data = await readFile('archivo.txt', 'utf8') // se lee el contenido del archivo archivo.txt de forma asíncrona y se guarda en la variable data
console.log(data) // se muestra el contenido del archivo en la consola
console.log('Hace algo mientras..')
console.log('leyendo el contenido del segundo archivo...')
const data2 = await readFile('archivo2.txt', 'utf8')
console.log(data2)
