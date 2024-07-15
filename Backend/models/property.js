"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
      });

      Property.belongsTo(models.Locations, {
        foreignKey: "locationsId",
        as: "location",
      });

      Property.hasMany(models.Bookings, {
        foreignKey: "propertyId",
        as: "bookings",
      });

      Property.belongsToMany(models.Amenities, {
        through: models.PropertyAmenities,
        foreignKey: "propertyId",
        otherKey: "amenitiesId",
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
      locationsId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      roomType: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image:DataTypes.STRING
    },
    {
      sequelize,
      tableName: "property",
      modelName: "Property",
      timestamps:false
      
    }
  );

  return Property;
};
