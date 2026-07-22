import DBLoca from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
const { Schema } = new DBLoca({ path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static create ({ username, password }) {
    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new Error('Invalid input')
    }
    if (username.length < 3 || password.length < 6) {
      throw new Error('Username must be at least 3 characters and password at least 6 characters long')
    }
    const user = User.findOne({ username })
    if (user) {
      throw new Error('Username already exists')
    }
    const id = crypto.randomUUID()
    const hashedPassword = bcrypt.hashSync(password, 10)
    User.create({ _id: id, username, password: hashedPassword }).save()
    return id
  }

  static login ({ username, password }) {}
}
