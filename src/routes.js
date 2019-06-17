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

// Users Types
routes.get('/user/types', controllers.UsersTypesController.listUsersTypes)

// Users Fields
routes.get('/user/fields', controllers.UsersFieldsController.listUsersFields) // Erro não encontra o ID

// Biblio Records
routes.get('/biblio/records', controllers.BiblioAllController.listBiblioRecords)

routes.post(
  '/biblio/records/new',
  controllers.BiblioAllController.storeBiblioRecords
)

// Reservations
routes.get('/reservations', controllers.ReservationsController.listReservations)
routes.post(
  '/reservation/new',
  controllers.ReservationsController.reservationCreate
)

module.exports = routes
