const express = require('express')
const db = require('./config/database')

class App {
  constructor () {
    this.isDev = process.env.NODE_ENV === 'production'
    this.express = express()
    this.database()
    this.middleware()
    this.routes()
  }

  database () {
    db.authenticate()
      .then(() => {
        console.log('Conectado com sucesso ao Banco de Dados.')
      })
      .catch(error => {
        console.log('Falha ao conectar ao Banco de Dados:', {
          msg: 'Log',
          error
        })
      })
  }

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
