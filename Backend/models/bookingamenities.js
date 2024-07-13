'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookingamenities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookingamenities.belongsTo(models.booking,{
        foreignKey:'bookingId'
      })
      bookingamenities.belongsTo(models.amenities,{
        foreignKey:'amenitiesId'
      })
    }
  }
  bookingamenities.init({
    bookingId: DataTypes.INTEGER,
    amenitiesId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'bookingamenities',
    modelName: 'bookingamenities',
  });
  return bookingamenities;
};