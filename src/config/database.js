const Sequelize = require('sequelize')
module.exports = new Sequelize('biblivre4', 'postgres', 'postgres', {
  host: 'localhost',
  port: '54320',
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
