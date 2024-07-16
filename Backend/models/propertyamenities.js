"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PropertyAmenities extends Model {
    static associate(models) {}
  }

  PropertyAmenities.init(
    {
      propertyId:{type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'properties',
        key:'propertyId'
        },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
  },
      amenityId:{type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'amenities',
        key:'amenityId'
        },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    },
  },
    {
      sequelize,
      tableName: "propertyamenities",
      modelName: "propertyamenities",
      timestamps:false
    }
  );

  return PropertyAmenities;
};
