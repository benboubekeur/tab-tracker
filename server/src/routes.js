const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPoilicy')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.post('/songs',
    SongsController.post)
  app.get('/songs',
    SongsController.index)
}
