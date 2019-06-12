const express = require('express')

class App {
  constructor () {
    this.isDev = process.env.NODE_ENV === 'production'
    this.express = express()
    this.database()
    this.middleware()
    this.routes()
  }

  database () {}

  middleware () {
    this.express.use(express.json())
    this.express.use(
      express.urlencoded({
        extended: false
      })
    )
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
