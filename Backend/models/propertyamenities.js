"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PropertyAmenities extends Model {
    static associate(models) {}
  }

  PropertyAmenities.init(
    {
      propertyId: DataTypes.INTEGER,
      amenitiesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "propertyamenities",
      modelName: "PropertyAmenities",
      timestamps:false
    }
  );

  return PropertyAmenities;
};
