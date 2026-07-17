import express from 'express'
import logger from 'morgan'
import {Server} from 'socket.io'
import { createServer } from 'node:http'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const io = new Server(server)

const db = createClient({
    url: "libsql://capable-leatherhead-santinofabini.aws-us-east-1.turso.io",
    authToken: process.env.DB_TOKEN
})

await db.execute("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)")

io.on('connection', (socket) => {
    console.log('New client connected')
    
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })

    socket.on('message', async (data) => {
        let result
        try {
            result = await db.execute("INSERT INTO messages (content) VALUES (?)", [data])
        } catch (error) {
            console.error('Error inserting message:', error)
        }
        io.emit('message', data)
    });
})

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})



server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
