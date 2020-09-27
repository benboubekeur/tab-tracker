const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt')
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register (req, res) {
    try {
      console.warn(req.body.password)
      const hash = bcrypt.hashSync(req.body.password, 10)
      const user = await User.create({ email: req.body.email, password: hash })
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (e) {
      console.warn(e.message)
      res.status(500).send({
        error: 'This email is used'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        // authentication failed
        return res.status(403).send({
          error: 'The login information was incorrect user'
        })
      }
      console.warn(password)
      console.warn(user.password)
      if (!bcrypt.compareSync(password, user.password)) {
        // authentication failed
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
