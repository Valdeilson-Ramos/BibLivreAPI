const Reservations = require('../models/Reservations')

class ReservationsController {
  async reservationCreate (req, res) {
    const reservation = await Reservations.create({
      ...req.body
    })
    return res.status(200).json({
      msg: 'Reserva criada com sucesso',
      reservation
    })
  }

  async listReservations (req, res) {
    const reservations = await Reservations.findAll()
    return res.status(200).json({
      msg: 'Listando as reservas!',
      reservations
    })
  }
}

module.exports = new ReservationsController()
