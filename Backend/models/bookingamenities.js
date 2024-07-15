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
      tableName: "booking_amenities",
      modelName: "BookingAmenities",
    }
  );

  return BookingAmenities;
};
