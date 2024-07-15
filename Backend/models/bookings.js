"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      Bookings.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
      });

      Bookings.belongsTo(models.Property, {
        foreignKey: "propertyId",
        as: "property",
      });

      Bookings.belongsToMany(models.Amenities, {
        through: models.BookingAmenities,
        foreignKey: "bookingsId",
        otherKey: "amenitiesId",
        as: "amenities",
      });

      Bookings.hasMany(models.Payments, {
        foreignKey: "bookingsId",
        as: "payments",
      });
    }
  }

  Bookings.init(
    {
      bookingsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      propertyId: DataTypes.INTEGER,
      checkInDate: DataTypes.DATE,
      checkOutDate: DataTypes.DATE,
      status: DataTypes.ENUM("Confirmed", "Cancelled"),
      numberOfGuests: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "bookings",
      modelName: "Bookings",
    }
  );

  return Bookings;
};
