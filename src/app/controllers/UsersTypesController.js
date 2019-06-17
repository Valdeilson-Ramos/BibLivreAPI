const UsersTypes = require('../models/UsersTypes')

class UsersTypesController {
  async storeUsersTypes (req, res) {
    const user = await UsersTypes.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Tipo de usuário criado com sucesso!!',
      user
    })
  }

  async listUsersTypes (req, res) {
    const users = await UsersTypes.findAll()
    return res.status(200).json({
      msg: 'Listando todos os tipos de usuários',
      users
    })
  }
}

module.exports = new UsersTypesController()
