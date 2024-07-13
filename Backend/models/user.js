'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.hasMany(models.property,{foreignKey:'userId'})
      User.hasMany(models.bookings, { foreignKey: "userId" });
      User.hasMany(models.payments, { foreignKey: "userId" });
    }
  }
  User.init({
    userId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username: DataTypes.STRING,
    email:DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'customer'),
    created_at:{
      type:DataTypes.DATE,
      defaultValue:DataTypes.NOW
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};