const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../src/models')

const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./history.json')

sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(
      users.map(u => {
        User.create(u)
      })
    )

    await Promise.all(
      songs.map(s => {
        Song.create(s)
      })
    )

    await Promise.all(
      bookmarks.map(b => {
        Bookmark.create(b)
      })
    )
    await Promise.all(
      histories.map(h => {
        History.create(h)
      })
    )
  })
