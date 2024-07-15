"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      Payments.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
      });

      Payments.belongsTo(models.Bookings, {
        foreignKey: "bookingsId",
        as: "booking",
      });
    }
  }

  Payments.init(
    {
      paymentsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      bookingsId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      paymentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: "payment_date",
      },
    },
    {
      sequelize,
      tableName: "payments",
      modelName: "Payments",
    }
  );

  return Payments;
};
