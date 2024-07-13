'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      locations.hasMany(models.property,{foreignKey:'locationsId'})
    }
  }
  locations.init({
    locationsId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: DataTypes.ENUM('Mumbai', 'Pune', 'Hyderabad'),
    address:DataTypes.STRING,
    country:{
      type:DataTypes.STRING,
      defaultValue:'India'
    }
  }, {
    sequelize,
    tableName:'locations',   
    modelName: 'locations',
  });
  return locations;
};