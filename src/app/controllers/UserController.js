const { User } = require('../models/index')

class UserController {
  async store (req, res) {
    const user = await User.create(req.body)
    return res.status(200).json({
      user,
      msg: 'Usuário Cadastrado com sucesso!'
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
