"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    static associate(models) {
      Locations.hasMany(models.properties, {
        foreignKey: "locationId",
        as: "properties",
      });
    }
  }

  Locations.init(
    {
      locationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.ENUM("Mumbai", "Pune", "Hyderabad"),
    },
    {
      sequelize,
      tableName: "locations",
      modelName: "locations",
      timestamps:false
    }
  );

  return Locations;
};
