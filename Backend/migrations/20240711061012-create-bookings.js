'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      bookingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      propertyId: {
        type: Sequelize.INTEGER
      },
      checkInDate: {
        type: Sequelize.DATE
      },
      checkOutDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('Confirmed', 'Cancelled'),
        defaultValue:'Confirmed'
      },
      numberOfGuests: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};