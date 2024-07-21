'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('propertyamenities', {
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        references:{
          model:'properties',
          key:'propertyId'
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('propertyamenities');
  }
};