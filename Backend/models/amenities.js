"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Amenities extends Model {
    static associate(models) {
      // many-to-many association with Property
      Amenities.belongsToMany(models.properties, {
        through: models.propertyamenities,
        foreignKey: "amenityId",
        otherKey: "propertyId",
        as: "properties",
      });
    }
  }

  Amenities.init(
    {
      amenityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      tableName: "amenities",
      modelName: "amenities",
      timestamps:false
    }
  );

  return Amenities;
};
