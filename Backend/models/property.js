'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      property.belongsTo(models.user,{foreignKey:'userId'});
      property.belongsTo(models.locations,{foreignKey:'locationsId'});

      property.belongsToMany(models.amenities,{
        through:models.propertyamenities,
        foreignKey:'propertyId'
      });

      property.hasMany(models.bookings,{foreignKey:'propertyId'})
    }
  }
  property.init({
    propertyId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    userId: DataTypes.INTEGER,
    locationsId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    roomtype: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'properties',
    modelName: 'property',
  });
  return property;
};