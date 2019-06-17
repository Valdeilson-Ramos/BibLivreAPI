const Sequelize = require('sequelize')
const db = require('../../config/database')
const Reservations = db.define(
  'reservations',
  {
    record_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    expires: Sequelize.DATE,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER
  },
  {
    timestamps: false,
    schema: 'single'
  }
)
module.exports = Reservations
