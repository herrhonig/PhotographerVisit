module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      {title: 'Фотосессия в студии', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Прямая трансляция', price: 10000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Многокамерная видеосъемка', price: 50000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Фотосессия стиле love story', price: 20000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Детская фотосъемка', price: 12000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Корпоративная фотосъемка', price: 30000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Видеосъемка', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Профессиональный монтаж', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Анимация', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Озвучивание и музыка', price: 15000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Basic', price: 20000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Silver', price: 33000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Gold', price: 51000, createdAt: new Date(), updatedAt: new Date()},
      {title: 'Platinum', price: 89000, createdAt: new Date(), updatedAt: new Date()},
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
