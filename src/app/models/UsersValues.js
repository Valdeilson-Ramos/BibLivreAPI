const Sequelize = require('sequelize')
const db = require('../../config/database')
const UserValues = db.define(
  'users_values',
  {
    user_id: Sequelize.INTEGER,
    key: Sequelize.STRING,
    value: Sequelize.STRING,
    ascii: Sequelize.STRING
  },
  {
    timestamps: false,
    schema: 'single',
    references: {
      model: 'users',
      key: 'id'
    }
  }
)
module.exports = UserValues
