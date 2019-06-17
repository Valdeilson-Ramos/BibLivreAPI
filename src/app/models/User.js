const Sequelize = require('sequelize')
const db = require('../../config/database')
const User = db.define(
  'users',
  {
    name: Sequelize.STRING,
    type: Sequelize.INTEGER,
    photo_id: Sequelize.STRING,
    status: Sequelize.STRING,
    login_id: Sequelize.INTEGER,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER,
    modified: Sequelize.DATE,
    modified_by: Sequelize.INTEGER,
    user_card_printed: Sequelize.BOOLEAN,
    name_ascii: Sequelize.STRING
  },
  {
    timestamps: false,
    schema: 'single'
  }
)
module.exports = User
