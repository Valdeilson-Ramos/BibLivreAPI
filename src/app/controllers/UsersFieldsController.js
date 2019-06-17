const UsersFields = require('../models/UsersFields')

class UsersFieldsController {
  async storeUsersFields (req, res) {
    const user = await UsersFields.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Complementos do usuário criado com sucesso!!',
      user
    })
  }

  async listUsersFields (req, res) {
    const users = await UsersFields.findAll()
    return res.status(200).json({
      msg: 'Listando todos os complementos do usuário',
      users
    })
  }
}

module.exports = new UsersFieldsController()
