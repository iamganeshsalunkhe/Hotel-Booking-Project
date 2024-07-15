"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    static associate(models) {
      Locations.hasMany(models.Property, {
        foreignKey: "locationsId",
        as: "properties",
      });
    }
  }

  Locations.init(
    {
      locationsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.ENUM("Mumbai", "Pune", "Hyderabad"),
    },
    {
      sequelize,
      tableName: "locations",
      modelName: "Locations",
      timestamps:false
    }
  );

  return Locations;
};
