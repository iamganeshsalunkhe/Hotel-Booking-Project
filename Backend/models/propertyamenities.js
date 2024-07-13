'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propertyamenities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Propertyamenities.belongsTo(models.property,{foreignKey:'propertyId'});
      Propertyamenities.belongsTo(models.amenities,{foreignKey:'amenitiesId'});
    }
  }
  Propertyamenities.init({
    propertyId: DataTypes.INTEGER,
    amenitiesId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'propertyamenities',
    modelName: 'Propertyamenities',
  });
  return Propertyamenities;
};