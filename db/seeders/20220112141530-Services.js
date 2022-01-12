'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Services', [
      {title: 'Фотосъемка', price: 10000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Видеосъемка', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Прямая трансляция', price: 10000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Многокамерная видеосъемка', price: 30000, createdAt: new Date(), updatedAt: new Date()},
  ], 
  {});

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
