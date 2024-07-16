"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BookingAmenities extends Model {
    static associate(models) {}
  }

  BookingAmenities.init(
    {
      bookingsId: DataTypes.INTEGER,
      amenitiesId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "bookingamenities",
      modelName: "BookingAmenities",
      timestamps:false
    }
  );

  return BookingAmenities;
};
