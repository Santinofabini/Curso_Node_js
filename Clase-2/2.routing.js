const http = require('node:http')
const json = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { url, method } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
          return res.end(JSON.stringify(json))
        default:
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
          return res.end('Page not found\n')
      }
    case 'POST':// traigo informacionz
      switch (url) {
        case '/pokemon':
          let body = ''
          req.on('data', chunk => { // empezo request
            body += chunk.toString()
          })
          req.on('end', () => { // termino la request
            const pokemon = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(pokemon))
          })
          break
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Servidor escuchando en http://localhost:1234')
})
