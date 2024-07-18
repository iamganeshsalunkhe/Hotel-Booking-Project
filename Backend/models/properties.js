"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsTo(models.users, {
        foreignKey: "userId",
        as: "user",
      });

      Property.belongsTo(models.locations, {
        foreignKey: "locationId",
        as: "location",
      });

      Property.hasMany(models.bookings, {
        foreignKey: "propertyId",
        as: "bookings",
      });

      Property.belongsToMany(models.amenities, {
        through: models.propertyamenities,
        foreignKey: "propertyId",
        otherKey: "amenityId",
        as: "amenities",
      });
    }
  }

  Property.init(
    {
      propertyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      roomType: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image:DataTypes.STRING
    },
    {
      sequelize,
      tableName: "properties",
      modelName: "properties",
      timestamps:false
      
    }
  );

  return Property;
};
