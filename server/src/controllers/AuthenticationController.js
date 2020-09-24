const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (e) {
      res.status(500).send({
        error: 'This email is used'
      })
    }
  }
}