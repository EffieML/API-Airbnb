'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 5,
        userId: 1,
        review: 'The home is in a great part of San Francisco. Easy walking distance to many areas.',
        stars: 4,
      },
      {
        spotId: 5,
        userId: 2,
        review: 'The home is in a good part of San Francisco. Easy walking distance to many areas.',
        stars: 5,
      },
      {
        spotId: 4,
        userId: 2,
        review: 'Loved our stay at the treehouse, just as cute and cozy in person as in the pictures.',
        stars: 5,
      },
      {
        spotId: 3,
        userId: 3,
        review: 'Nice place. Well maintained, but, only an OK location.',
        stars: 3,
      },
      {
        spotId: 2,
        userId: 4,
        review: 'Very beautiful stay. Everything was as described. Loved every bit of our stay.',
        stars: 5,
      },
      {
        spotId: 1,
        userId: 5,
        review: 'Our stay was wonderful. Very relaxing! Loved the beach and the ocean! The birds were amazing!',
        stars: 4,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
