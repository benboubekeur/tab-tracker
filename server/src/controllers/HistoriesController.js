const { History, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.query.userId
      const where = {
        UserId: userId
      }
      const histories = await History.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ],
        order: [
          ['createdAt', 'DESC']
        ]
      })

      res.send(histories)
    } catch (err) {
      console.warn(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      const history = await History.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (history) {
        return res.status(400).send({
          error: 'you already have this set as a history'
        })
      }
      const newHistory = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newHistory)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the bookmark '
      })
    }
  }
}
