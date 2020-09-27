module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(60),
      unique: true
    },
    password: DataTypes.STRING(255)
  })
  return User
}
