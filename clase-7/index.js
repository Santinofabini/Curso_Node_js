import express from 'express'
import { UserRepository } from './user-repository.js'
const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.post('/login', (req, res) => {
  res.send('Login exitoso')
})

app.post('/register', (req, res) => {
  const { username, password } = req.body
  try {
    const id = UserRepository.create({ username, password })
    res.send(`Registro exitoso, ID: ${id}`)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/logout', (req, res) => {
  res.send('Logout exitoso')
})

app.get('/protected', (req, res) => {
  res.send('Ruta protegida')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
