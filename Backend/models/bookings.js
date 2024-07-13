'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookings.belongsTo(models.user,{foreignKey:'userId'});
      bookings.belongsTo(models.property,{foreignKey:'propertyId'});

      bookings.belongsToMany(models.amenities,{
        through:models.bookingamenities,
        foreignKey:'bookingsId'
        });
    }
  }
  bookings.init({
    bookingsId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    userId: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER,
    checkInDate: DataTypes.DATE,
    checkOutDate: DataTypes.DATE,
    status: DataTypes.ENUM('Confirmed', 'Cancelled'),
    numberOfGuests: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'bookings',
    modelName: 'bookings',
  });
  return bookings;
};