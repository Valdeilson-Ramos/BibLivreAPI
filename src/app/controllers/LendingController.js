const Lendings = require('../models/Lending')

class LendingigsController {
  async createLending (req, res) {
    const requests = await Lendings.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Emprestimo criado com sucesso!',
      requests
    })
  }

  async listLendings (req, res) {
    const requests = await Lendings.findAll()
    return res.status(200).json({
      msg: 'Listando todas os emprestimos',
      requests
    })
  }
}

module.exports = new LendingigsController()
