const Sequelize = require('sequelize')
module.exports = new Sequelize('biblivre4', 'postgres', 'abracadabra', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
