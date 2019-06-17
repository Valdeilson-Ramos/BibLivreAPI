const express = require('express')
const controllers = require('./app/controllers')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('Bem Vindo ao BibLivre IFMA')
})

// Requests Routes
routes.get('/requests', controllers.RequestsController.list)
routes.post('/requests/new', controllers.RequestsController.store)

// User Routes
routes.get('/users', controllers.UserController.list)
routes.post('/user/new', controllers.UserController.store)

module.exports = routes
