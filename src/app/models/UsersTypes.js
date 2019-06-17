const Sequelize = require('sequelize')
const db = require('../../config/database')
const UserTypes = db.define(
  'users_types',
  {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    lending_limit: Sequelize.INTEGER,
    reservation_limit: Sequelize.INTEGER,
    lending_time_limit: Sequelize.INTEGER,
    reservation_time_limit: Sequelize.INTEGER,
    fine_value: Sequelize.REAL,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER,
    modified: Sequelize.DATE,
    modified_by: Sequelize.INTEGER
  },
  {
    timestamps: false,
    schema: 'single'
  }
)
module.exports = UserTypes
