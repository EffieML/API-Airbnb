'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 5,
        userId: 1,
        startDate: new Date('2022-10-19'),
        endDate: new Date('2022-10-23'),
      },
      {
        spotId: 4,
        userId: 2,
        startDate: '2022-10-05',
        endDate: '2022-10-13',
      },
      {
        spotId: 3,
        userId: 3,
        startDate: '2022-11-24',
        endDate: '2022-11-27',
      },
      {
        spotId: 2,
        userId: 4,
        startDate: '2022-12-24',
        endDate: '2023-01-02',
      },
      {
        spotId: 1,
        userId: 5,
        startDate: '2022-10-29',
        endDate: '2022-11-02',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
