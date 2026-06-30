const path = require('node:path')

console.log(path.sep) // se muestra el separador de rutas del sistema operativo en la consola
// Unir de rutas
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // se muestra la ruta unida en la consola
const base = path.basename('/var/www/html/index.html')
console.log(base) // se muestra el nombre del archivo en la consola, en este caso index.html
const extension = path.extname('index.html')// se muestra la extensión del archivo en la consola, en este caso .html
console.log(extension)
