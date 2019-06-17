const Sequelize = require('sequelize')
const db = require('../../config/database')
const BiblioRecords = db.define(
  'biblio_records',
  {
    iso2709: Sequelize.TEXT,
    material: Sequelize.STRING,
    database: Sequelize.STRING,
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
module.exports = BiblioRecords
