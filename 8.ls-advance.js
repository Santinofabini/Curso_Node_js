const fs = require('node:fs') // se importa el módulo fs de Node.js

const dir = process.argv[2] ?? '.' // se obtiene el directorio a leer de los argumentos de la línea de comandos, si no se proporciona ningún argumento, se utiliza el directorio actual ('.') por defecto
fs.readdir(dir, (err, files) => { // se lee el contenido del directorio especificado de forma asíncrona y se guarda en la variable files
  if (err) {
    console.error('Eerror al leer el directorio:', err) // si hay un error, se muestra en la consola
    return
  }
  console.log('Archivos en el directorio:', files) // se muestra la lista de archivos en la consola
})
