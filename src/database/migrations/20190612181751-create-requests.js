'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requester: {
        type: Sequelize.STRING
      },
      item_title: {
        type: Sequelize.STRING
      },
      item_subtitle: {
        type: Sequelize.STRING
      },
      editor_number: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      modified: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
      },
      modified_by: {
        type: Sequelize.INTEGER
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Requests')
  }
}
