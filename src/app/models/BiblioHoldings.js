const Sequelize = require('sequelize')
const db = require('../../config/database')
const BiblioHoldings = db.define(
  'biblio_holdings',
  {
    record_id: Sequelize.INTEGER,
    iso2709: Sequelize.TEXT,
    database: Sequelize.STRING,
    accession_number: Sequelize.STRING,
    location_d: Sequelize.STRING,
    created: Sequelize.DATE,
    created_by: Sequelize.INTEGER,
    modified: Sequelize.DATE,
    modified_by: Sequelize.INTEGER,
    availability: Sequelize.STRING,
    label_printed: Sequelize.BOOLEAN
  },
  {
    timestamps: false,
    schema: 'single'
  }
)
module.exports = BiblioHoldings
