'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/1/1.webp',
        preview: true,
      },
      {
        spotId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/1/2.webp',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/1/3.webp',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/1/4.webp',
        preview: false,
      },
      {
        spotId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/1/5.webp',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/2/1.webp',
        preview: true,
      },
      {
        spotId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/2/2.webp',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/2/3.webp',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/2/4.webp',
        preview: false,
      },
      {
        spotId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/2/5.webp',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/3/1.webp',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/3/2.webp',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/3/3.webp',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/3/4.webp',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/3/5.webp',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/4/1.webp',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/4/2.webp',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/4/3.webp',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/4/4.webp',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/4/5.webp',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/5/1.webp',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/5/2.webp',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/5/3.webp',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/5/4.webp',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/5/5.webp',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/6/1.webp',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/6/2.webp',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/6/3.webp',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/6/4.webp',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/6/5.webp',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/7/1.webp',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/7/2.webp',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/7/3.webp',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/7/4.webp',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/7/5.webp',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/8/1.webp',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/8/2.webp',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/8/3.webp',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/8/4.webp',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/8/5.webp',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/9/1.webp',
        preview: true,
      },
      {
        spotId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/9/2.webp',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/9/3.webp',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/9/4.webp',
        preview: false,
      },
      {
        spotId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/9/5.webp',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/10/1.webp',
        preview: true,
      },
      {
        spotId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/10/2.webp',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/10/3.webp',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/10/4.webp',
        preview: false,
      },
      {
        spotId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/10/5.webp',
        preview: false,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
