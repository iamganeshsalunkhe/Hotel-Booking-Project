'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    payments.belongsTo(models.user,{foreignKey:'userId'});
    payments.belongsTo(models.bookings,{foreignKey:'bookingId'})
    }
  }
  payments.init({
    paymentsId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    userId: DataTypes.INTEGER,
    bookingsId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE
  }, {
    sequelize,
    tableName:'payments',
    modelName: 'payments',
  });
  return payments;
};