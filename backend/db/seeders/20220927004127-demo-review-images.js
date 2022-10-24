'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/32cc47c8-061e-474b-8108-ec17bce7d542.jpeg?im_w=720',
      },
      {
        reviewId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/576489e8-0740-4d30-9731-c08b22ffa06c.jpeg?im_w=720',
      },
      {
        reviewId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46437081/original/a49f5bfb-b67a-4d9f-ad2b-18ea0cf51872.jpeg?im_w=1200',
      },
      {
        reviewId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-667905374365439455/original/83e4fceb-8728-40f6-975e-b599cdc95169.jpeg?im_w=720',
      },
      {
        reviewId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/e96f8e60-29eb-45fb-8770-7706d53ee089.jpeg?im_w=720',
      },
      {
        reviewId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-38154526/original/5b5bf351-774d-4331-b977-19f0f5d2435b.jpeg?im_w=720',
      },
      {
        reviewId: 7,
        url: 'https://a0.muscache.com/im/pictures/6cf53905-ca5b-454a-9a74-9fdca13e2e79.jpg?im_w=720',
      },
      {
        reviewId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-711870238451089844/original/385438e4-4b66-4d99-99ac-f894e71323c1.jpeg?im_w=720',
      },
      {
        reviewId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-611398014875184235/original/a7b5d561-b204-4278-a3f8-63899e2de9d0.jpeg?im_w=1200',
      },
      {
        reviewId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/b68894e7-f12f-43ba-af5a-4f3bfbd8cd3e.jpeg?im_w=1440',
      },
      {
        reviewId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-35484446/original/478a2864-8bc9-4d9f-911a-68fbaeb63aaa.jpeg?im_w=1440',
      },
      {
        reviewId: 12,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20958243/original/b0875f23-489c-4515-ac2b-d737cac9f10c.jpeg?im_w=1200',
      },
      {
        reviewId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/73f859e7-0a01-4615-8d92-8f54f8da2ecc.jpeg?im_w=1200',
      },
      {
        reviewId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51871434/original/dc99fcc0-dc4a-4d7d-81b4-4037d5b09b1f.jpeg?im_w=720',
      },
      {
        reviewId: 15,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-31152197/original/916168e9-9168-4262-be15-3616ba3976bb.jpeg?im_w=720',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ReviewImages', null, {});
  }
};
