const Model = require('../models')

class UserController {
  async store (req, res) {
    const user = await Model.User.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Usuário Cadastrado com sucesso!',
      user
    })
  }

  async listUsersValues (req, res) {
    const usersValuesList = await Model.UsersValues.findAll()
    return res.status(200).json({
      msg: 'Complementos cadastro usuário',
      usersValuesList
    })
  }

  async list (req, res) {
    const users = await Model.User.findAll()
    return res.status(200).json({
      msg: 'Listando todos os usuários',
      users
    })
  }
}

module.exports = new UserController()
