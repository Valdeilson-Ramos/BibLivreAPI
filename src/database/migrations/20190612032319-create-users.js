'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Nome de usuário não pode ficar em branco!'
          },
          len: {
            args: [4, 30],
            msg: 'Esse campo deve ter entre 4 e 30 caracteres!'
          }
        }
      },
      type_user: {
        type: Sequelize.INTEGER
      },
      photo_id: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      login_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW(),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW(),
        allowNull: false
      },
      create_by: {
        type: Sequelize.INTEGER
      },
      modified: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW(),
        allowNull: false
      },
      modified_by: {
        type: Sequelize.INTEGER
      },
      user_card_printed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      name_ascii: {
        type: Sequelize.STRING
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('Users')
  }
}
