module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {title: 'BASIC', description: 'Фотосессия в студии, Детская фотосъёмка', price: 20000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'SILVER', description: 'Фотосессия в студии, Детская фотосъёмка, Видеосъемка', price: 33000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'GOLD', description: 'Фотосессия в студии, Детская фотосъёмка, Видеосъемка, Профессиональный монтаж', price: 51000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'PLATINUM', description: 'Фотосессия в студии, Детская фотосъёмка, Видеосъемка, Профессиональный монтаж, Озвучивание и музыка',price: 89000, createdAt: new Date(), updatedAt: new Date()},
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    }
};
