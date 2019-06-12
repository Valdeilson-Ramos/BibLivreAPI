const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('BibLivre 5')
})

module.exports = routes
