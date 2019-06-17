const Biblio = require('../models')

class BiblioAllController {
  async storeBiblioRecords (req, res) {
    const createBiblioRecords = await Biblio.BiblioRecords.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Biblio Records criada com sucesso!',
      createBiblioRecords
    })
  }

  async listBiblioRecords (req, res) {
    const biblioRecordsAll = await Biblio.BiblioRecords.findAll()
    return res.status(200).json({
      msg: 'Listando todas os biblio records',
      biblioRecordsAll
    })
  }
}

module.exports = new BiblioAllController()
