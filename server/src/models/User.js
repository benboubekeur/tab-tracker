const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(60),
      unique: true
    },
    password: DataTypes.STRING(255)
  },
  {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = bcrypt.hashSync(user.password, 10)
      },
      beforeUpdate: function (user, options) {
        user.password = bcrypt.hashSync(user.password, 10)
      }
    }
  }
  )
  return User
}
