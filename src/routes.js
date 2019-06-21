const express = require('express')
const controllers = require('./app/controllers')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('Bem Vindo ao BibLivre IFMA')
})

// Requests Routes
routes.get('/requests', controllers.RequestsController.list)
routes.post('/requests/new', controllers.RequestsController.store)

// User Routes / Usuário
routes.get('/users', controllers.UserController.list)
routes.get('/user/values', controllers.UserController.listUsersValues)
routes.post('/user/new', controllers.UserController.store)

// Users Types / Tipos de Usuários
routes.get('/user/types', controllers.UsersTypesController.listUsersTypes)

// Users Fields / Complementos cadastro usuário
routes.get('/user/fields', controllers.UsersFieldsController.listUsersFields) // Erro não encontra o ID

// Biblio Records / Cadastro de Livro
routes.get('/biblio/records', controllers.BiblioAllController.listBiblioRecords)

routes.post(
  '/biblio/records/new',
  controllers.BiblioAllController.storeBiblioRecords
)

// Reservations / Reservas
routes.get('/reservations', controllers.ReservationsController.listReservations)
routes.post(
  '/reservation/new',
  controllers.ReservationsController.reservationCreate
)

// Lendings / Emprestimos

routes.get('/lendings', controllers.LendingController.listLendings)
routes.post('/lending/new', controllers.LendingController.createLending)

// Biblio_Holdings / Exemplares

routes.get(
  '/biblio/holdings',
  controllers.BiblioAllController.listBiblioHoldings
)

routes.post(
  '/biblio/holding/new',
  controllers.BiblioAllController.storeBiblioHoldings
)
module.exports = routes
