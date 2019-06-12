module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define('Requests', {
    requester: DataTypes.STRING,
    item_title: DataTypes.STRING,
    item_subtitle: DataTypes.STRING,
    editor_number: DataTypes.STRING,
    publisher: DataTypes.STRING,
    info: DataTypes.TEXT,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    modified: DataTypes.DATE,
    modified_by: DataTypes.INTEGER
  })

  return Requests
}
