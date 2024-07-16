"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BookingAmenities extends Model {
    static associate(models) {}
  }

  BookingAmenities.init(
    {
      bookingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "bookings",
          key: "bookingId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      amenityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "amenities",
          key: "amenityId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "bookingamenities",
      modelName: "bookingamenities",
      timestamps: false,
    }
  );

  return BookingAmenities;
};
