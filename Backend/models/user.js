"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Property, {
        foreignKey: "userId",
        as: "properties",
      });

      Users.hasMany(models.Bookings, {
        foreignKey: "userId",
        as: "bookings",
      });

      Users.hasMany(models.Payments, {
        foreignKey: "userId",
        as: "payments",
      });
    }
    toJSON() {
      return {
        ...this.get(),
        password: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        role: undefined,
      };
    }
  }

  Users.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "customer"),
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
    }
  );

  return Users;
};
