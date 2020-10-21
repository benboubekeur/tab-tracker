module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING(60),
    artist: DataTypes.STRING(255),
    genre: DataTypes.STRING(255),
    album: DataTypes.STRING(255),
    albumImageUrl: DataTypes.STRING(255),
    youtubeId: DataTypes.STRING(255),
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })
  return Song
}
