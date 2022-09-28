'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/ae8b8858-7777-4003-8bc3-593e38d0b8e8.jpeg?im_w=1200',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/9a912f52-3303-41a6-a080-069fe36dddf1.jpg?im_w=1200',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/5f5567d3-480c-43dd-9b6a-e057dab2192d.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/25211289-ca35-489d-a681-f72c2129b011.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/787ff749-f22a-469e-a0d0-426916da40d5.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/6dbfa9c2-c544-4dd8-8614-fa390338f87f.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/81d412c4-e692-4673-9fcb-cea00502bae4.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48733885/original/d02bd9cd-460e-4618-aff9-999a1bcdbe8b.jpeg?im_w=720',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/8075a3cc-f54f-4cda-a5af-dc847d796de0.jpg?im_w=1200',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/5b705ccf-3c7b-4ebd-a8ff-c0ce1c3e5f04.jpg?im_w=1200',
        preview: false,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
