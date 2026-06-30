const http = require('node:http') // protocolo HTTP
const fs = require('node:fs') // sistema de archivos para leer archivos de imagen
console.log(process.env)

const desiredPort = process.env.PORT ?? 1234
const Servidor = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }) // text/plain; charset=utf-8' para que tome acentos y mas.
    res.end('Hola mündo desde Node.js\n')// node --watch Clase-2/1.http.js para conexion instantanea
  } else if (req.url === '/Imagen') {
    fs.readFile('./Clase-2/Imagen1.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error al leer la imagen')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else if (req.url === '/Contacto') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Contacto\n')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Page not found\n')
  }
}
const server = http.createServer(Servidor)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
