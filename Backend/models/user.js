"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.properties, {
        foreignKey: "userId",
        as: "properties",
      });

      Users.hasMany(models.bookings, {
        foreignKey: "userId",
        as: "bookings",
      });

      Users.hasMany(models.payments, {
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
      updatedAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
      }
    },
    {
      sequelize,
      tableName: "users",
      modelName: "users",
    }
  );

  return Users;
};
