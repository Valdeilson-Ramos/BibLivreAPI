const User = require('../models/User')

class UserController {
  async store (req, res) {
    const user = await User.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Usuário Cadastrado com sucesso!',
      user
    })
  }

  async list (req, res) {
    const users = await User.findAll()
    return res.status(200).json({
      msg: 'Listando todos os usuários',
      users
    })
  }
}

module.exports = new UserController()
