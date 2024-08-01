"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      Bookings.belongsTo(models.users, {
        foreignKey: "userId",
        as: "user",
      });

      Bookings.belongsTo(models.properties, {
        foreignKey: "propertyId",
        as: "property",
      });

    }
  }

  Bookings.init(
    {
      bookingId: {
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
      timestamps:false,
      tableName: "bookings",
      modelName: "bookings",
    }
  );

  return Bookings;
};
