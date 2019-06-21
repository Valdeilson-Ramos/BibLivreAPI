const Sequelize = require('sequelize')
const db = require('../../config/database')
const Request = db.define(
  'lendings',
  {
    holding_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    previous_lending_id: Sequelize.INTEGER,
    expected_return_date: Sequelize.DATE,
    return_date: Sequelize.STRING,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER
  },
  {
    timestamps: false,
    schema: 'single'
  }
)
module.exports = Request
