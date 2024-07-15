"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Amenities extends Model {
    static associate(models) {
      // many-to-many association with Property
      Amenities.belongsToMany(models.Property, {
        through: models.PropertyAmenities,
        foreignKey: "amenitiesId",
        otherKey: "propertyId",
        as: "properties",
      });

      // many-to-many association with Bookings
      Amenities.belongsToMany(models.Bookings, {
        through: models.BookingAmenities,
        foreignKey: "amenitiesId",
        otherKey: "bookingsId",
        as: "bookings",
      });
    }
  }

  Amenities.init(
    {
      amenitiesId: {
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
      modelName: "Amenities",
      timestamps:false
    }
  );

  return Amenities;
};
