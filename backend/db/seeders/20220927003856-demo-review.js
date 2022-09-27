'use strict';
const { Review } = require('../models');

const validReviews = [
  {
    spotId: 5,
    userId: 1,
    review: 'The home is in a great part of San Francisco. Easy walking distance to many areas.',
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
]

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Review.bulkCreate(validReviews, {
      validate: true
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
