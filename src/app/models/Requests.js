const Sequelize = require('sequelize')
const db = require('../../config/database')
const Request = db.define(
  'requests',
  {
    requester: Sequelize.STRING,
    author: Sequelize.STRING,
    item_title: Sequelize.STRING,
    item_subtitle: Sequelize.STRING,
    edition_number: Sequelize.STRING,
    publisher: Sequelize.STRING,
    info: Sequelize.TEXT,
    status: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
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
module.exports = Request
