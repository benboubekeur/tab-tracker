const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BoookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPoilicy')
const isAuthenticated = require('./policies/isAuthenticated')
module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.post('/songs', SongsController.post)
  app.get('/songs', SongsController.index)
  app.put('/songs/:songId', SongsController.put)
  app.get('/songs/:songId', SongsController.show)

  app.get('/bookmarks', isAuthenticated, BookmarksController.index)
  app.post('/bookmarks', isAuthenticated, BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId', isAuthenticated, BookmarksController.destroy)

  app.get('/histories', isAuthenticated, HistoriesController.index)
  app.post('/histories', isAuthenticated, HistoriesController.post)
}
