import express from 'express'
import logger from 'morgan'
import {Server} from 'socket.io'
import { createServer } from 'node:http'



const PORT = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', () => {
    console.log('New client connected')
})



app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})

app.use(logger('dev'))

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
