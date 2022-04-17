require('dotenv').config()
const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    // Middlewares
    this.middlewares()
    // Routes
    this.routes()
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`)
    })
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }
}

module.exports = Server
