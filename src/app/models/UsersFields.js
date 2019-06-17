const Sequelize = require('sequelize')
const db = require('../../config/database')
const UserFields = db.define(
  'users_fields',
  {
    key: Sequelize.STRING,
    type: Sequelize.STRING,
    required: Sequelize.BOOLEAN,
    max_length: Sequelize.INTEGER,
    sort_order: Sequelize.INTEGER,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER,
    modified: Sequelize.DATE,
    modified_by: Sequelize.INTEGER
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
module.exports = UserFields
