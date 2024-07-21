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

      // many-to-many association with Bookings
      Amenities.belongsToMany(models.bookings, {
        through: models.bookingamenities,
        foreignKey: "amenityId",
        otherKey: "bookingId",
        as: "bookings",
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
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
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
