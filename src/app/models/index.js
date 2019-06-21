// const fs = require('fs')
// const path = require('path')
// const Sequelize = require('sequelize')
// const config = require('../../config/database')

// const sequelize = new Sequelize(config)
// const db = {
//   UsersValues: sequelize.require('../')

// fs.readdirSync(__dirname)
//   .filter(
//     file =>
//       file.indexOf('.') !== 0 &&
//       file !== path.basename(__filename) &&
//       file.slice(-3) === '.js'
//   )
//   .forEach(file => {
//     const model = Sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
//   })

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Conectado com sucesso ao Banco de Dados.')
//   })
//   .catch(error => {
//     console.log('Falha ao conectar ao Banco de Dados:', {
//       msg: 'Log',
//       error
//     })
//   })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db
module.exports = require('require-dir')()
