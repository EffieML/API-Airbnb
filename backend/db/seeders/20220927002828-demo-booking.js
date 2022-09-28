'use strict';

// const { Booking } = require('../models');

// const validBookings = [
//   {
//     spotId: 5,
//     userId: 1,
//     startDate: new Date('2022-10-19 15:00:00'),
//     endDate: new Date('2022-10-23 11:00:00'),
//   },
//   {
//     spotId: 4,
//     userId: 2,
//     startDate: '2022-10-05 15:00:00',
//     endDate: '2022-10-13 11:00:00',
//   },
//   {
//     spotId: 3,
//     userId: 3,
//     startDate: '2022-11-24 15:00:00',
//     endDate: '2022-11-27 11:00:00',
//   },
//   {
//     spotId: 2,
//     userId: 4,
//     startDate: '2022-12-24 15:00:00',
//     endDate: '2023-01-02 11:00:00',
//   },
//   {
//     spotId: 1,
//     userId: 5,
//     startDate: '2022-10-29 15:00:00',
//     endDate: '2022-11-02 11:00:00',
//   },
// ]

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
    * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //dynamic create with bulkCreate
    // await Booking.bulkCreate(validBookings, {
    //   validate: true
    // });
    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 5,
        userId: 1,
        startDate: new Date('2022-10-19 15:00:00'),
        endDate: new Date('2022-10-23 11:00:00'),
      },
      {
        spotId: 4,
        userId: 2,
        startDate: '2022-10-05 15:00:00',
        endDate: '2022-10-13 11:00:00',
      },
      {
        spotId: 3,
        userId: 3,
        startDate: '2022-11-24 15:00:00',
        endDate: '2022-11-27 11:00:00',
      },
      {
        spotId: 2,
        userId: 4,
        startDate: '2022-12-24 15:00:00',
        endDate: '2023-01-02 11:00:00',
      },
      {
        spotId: 1,
        userId: 5,
        startDate: '2022-10-29 15:00:00',
        endDate: '2022-11-02 11:00:00',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
