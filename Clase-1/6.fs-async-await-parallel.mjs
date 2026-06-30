import { readFile } from 'node:fs/promises' // se importa la función readFile del módulo fs/promises de Node.js

Promise.all([
    readFile('archivo.txt', 'utf8'),
    readFile('archivo2.txt', 'utf8')
]).then(([data, data2]) => {
    console.log('primer archivo:', data) // se muestra el contenido del primer archivo en la consola
    console.log('segundo archivo:', data2) // se muestra el contenido del segundo archivo en la consola
})
