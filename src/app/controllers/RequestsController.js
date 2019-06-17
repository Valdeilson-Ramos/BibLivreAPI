const Requests = require('../models/Requests')

class RequestsController {
  async store (req, res) {
    const requests = await Requests.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Resquest criada com sucesso!',
      requests
    })
  }

  async list (req, res) {
    const requests = await Requests.findAll()
    return res.status(200).json({
      msg: 'Listando todas as requests',
      requests
    })
  }
}

module.exports = new RequestsController()
