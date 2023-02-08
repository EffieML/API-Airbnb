'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 5,
        userId: 1,
        startDate: new Date('2023-03-10'),
        endDate: new Date('2023-03-15'),
        // startDate: '2023-02-19',
        // endDate: '2023-02-23',
      },
      {
        spotId: 4,
        userId: 2,
        startDate: new Date('2023-02-30'),
        endDate: new Date('2023-03-13'),
        // startDate: '2023-01-30',
        // endDate: '2023-02-13',
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date('2023-04-26'),
        endDate: new Date('2023-05-04'),
        // startDate: '2023-02-26',
        // endDate: '2023-03-04',
      },
      {
        spotId: 2,
        userId: 4,
        startDate: new Date('2023-04-10'),
        endDate: new Date('2023-04-15'),
        // startDate: '2023-02-06',
        // endDate: '2023-02-12',
      },
      {
        spotId: 1,
        userId: 5,
        startDate: new Date('2023-02-30'),
        endDate: new Date('2023-03-04'),
        // startDate: '2023-01-30',
        // endDate: '2023-02-04',
      },
      {
        spotId: 6,
        userId: 6,
        startDate: new Date('2023-03-28'),
        endDate: new Date('2023-04-02'),
      },
      {
        spotId: 7,
        userId: 7,
        startDate: new Date('2023-02-25'),
        endDate: new Date('2023-03-02'),
      },
      {
        spotId: 8,
        userId: 3,
        startDate: new Date('2023-04-12'),
        endDate: new Date('2023-04-15'),
      },
      {
        spotId: 9,
        userId: 7,
        startDate: new Date('2023-05-07'),
        endDate: new Date('2023-05-13'),
      },
      {
        spotId: 10,
        userId: 1,
        startDate: new Date('2023-03-17'),
        endDate: new Date('2023-03-23'),
      },
      {
        spotId: 11,
        userId: 4,
        startDate: new Date('2023-04-03'),
        endDate: new Date('2023-04-07'),
      },
      {
        spotId: 12,
        userId: 5,
        startDate: new Date('2023-02-22'),
        endDate: new Date('2023-02-25'),
      },
      {
        spotId: 13,
        userId: 3,
        startDate: new Date('2023-03-30'),
        endDate: new Date('2023-04-03'),
      },
      {
        spotId: 14,
        userId: 7,
        startDate: new Date('2023-03-12'),
        endDate: new Date('2023-03-18'),
      },
      {
        spotId: 15,
        userId: 2,
        startDate: new Date('2023-03-22'),
        endDate: new Date('2023-04-05'),
      },
      {
        spotId: 16,
        userId: 3,
        startDate: new Date('2023-03-12'),
        endDate: new Date('2023-03-20'),
      },
      {
        spotId: 17,
        userId: 4,
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-03-22'),
      },
      {
        spotId: 18,
        userId: 7,
        startDate: new Date('2023-04-03'),
        endDate: new Date('2023-04-10'),
      },
      {
        spotId: 19,
        userId: 2,
        startDate: new Date('2023-04-10'),
        endDate: new Date('2023-04-14'),
      },
      {
        spotId: 20,
        userId: 5,
        startDate: new Date('2023-03-20'),
        endDate: new Date('2023-03-24'),
      },
      {
        spotId: 21,
        userId: 6,
        startDate: new Date('2023-03-04'),
        endDate: new Date('2023-03-12'),
      },
      {
        spotId: 22,
        userId: 6,
        startDate: new Date('2023-04-05'),
        endDate: new Date('2023-04-10'),
      },
      {
        spotId: 23,
        userId: 1,
        startDate: new Date('2023-03-25'),
        endDate: new Date('2023-04-03'),
      },
      {
        spotId: 24,
        userId: 1,
        startDate: new Date('2023-04-28'),
        endDate: new Date('2023-05-03'),
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
