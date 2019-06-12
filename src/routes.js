const express = require('express')
const UserController = require('./app/controllers/UserController')
const RequestsController = require('./app/controllers/RequestsController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('BibLivre 5')
})

routes.post('/register', UserController.store)
routes.get('/users', UserController.list)

// Requests
routes.get('/requests', RequestsController.list)
routes.post('/requests/create', RequestsController.store)

module.exports = routes
