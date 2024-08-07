'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      propertyId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      roomType: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      isBooked:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      image:{
        type:Sequelize.STRING,
        allowNull:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};