'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookingamenities', {
      bookingId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        references:{
          model:'bookings',
          key:'bookingId'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      amenityId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        references:{
          model:'amenities',
          key:'amenityId'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      price: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookingamenities');
  }
};