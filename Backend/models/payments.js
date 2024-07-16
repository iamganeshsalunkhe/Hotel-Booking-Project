"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      Payments.belongsTo(models.users, {
        foreignKey: "userId",
        as: "user",
      });

      Payments.belongsTo(models.bookings, {
        foreignKey: "bookingId",
        as: "booking",
      });
    }
  }

  Payments.init(
    {
      paymentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      bookingId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      paymentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    },
    {
      sequelize,
      tableName: "payments",
      modelName: "payments",
      timestamps:false
    }
  );

  return Payments;
};
