module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    type_user: DataTypes.INTEGER,
    photo_id: DataTypes.STRING,
    status: DataTypes.STRING,
    login_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    create_by: DataTypes.INTEGER,
    modified: DataTypes.DATE,
    modified_by: DataTypes.INTEGER,
    user_card_printed: DataTypes.BOOLEAN,
    name_ascii: DataTypes.STRING
  })

  return User
}
