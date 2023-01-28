'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 5,
        userId: 1,
        startDate: new Date('2023-02-19'),
        endDate: new Date('2023-02-23'),
        // startDate: '2023-02-19',
        // endDate: '2023-02-23',
      },
      {
        spotId: 4,
        userId: 2,
        startDate: new Date('2023-01-30'),
        endDate: new Date('2023-02-13'),
        // startDate: '2023-01-30',
        // endDate: '2023-02-13',
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date('2023-02-26'),
        endDate: new Date('2023-03-04'),
        // startDate: '2023-02-26',
        // endDate: '2023-03-04',
      },
      {
        spotId: 2,
        userId: 4,
        startDate: new Date('2023-02-06'),
        endDate: new Date('2023-02-12'),
        // startDate: '2023-02-06',
        // endDate: '2023-02-12',
      },
      {
        spotId: 1,
        userId: 5,
        startDate: new Date('2023-01-30'),
        endDate: new Date('2023-02-04'),
        // startDate: '2023-01-30',
        // endDate: '2023-02-04',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
