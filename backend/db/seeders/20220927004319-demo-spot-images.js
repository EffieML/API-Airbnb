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
      {
        spotId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/11/1.webp',
        preview: true,
      },
      {
        spotId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/11/2.webp',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/11/3.webp',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/11/4.webp',
        preview: false,
      },
      {
        spotId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/11/5.webp',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/12/1.webp',
        preview: true,
      },
      {
        spotId: 12,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/12/2.webp',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/12/3.webp',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/12/4.webp',
        preview: false,
      },
      {
        spotId: 12,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/12/5.webp',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/13/1.webp',
        preview: true,
      },
      {
        spotId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/13/2.webp',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/13/3.webp',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/13/4.webp',
        preview: false,
      },
      {
        spotId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/13/5.webp',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/14/1.webp',
        preview: true,
      },
      {
        spotId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/14/2.webp',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/14/3.webp',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/14/4.webp',
        preview: false,
      },
      {
        spotId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/14/5.webp',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/15/1.webp',
        preview: true,
      },
      {
        spotId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/15/2.webp',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/15/3.webp',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/15/4.webp',
        preview: false,
      },
      {
        spotId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/15/5.webp',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/16/1.webp',
        preview: true,
      },
      {
        spotId: 16,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/16/2.webp',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/16/3.webp',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/16/4.webp',
        preview: false,
      },
      {
        spotId: 16,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/16/5.webp',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/17/1.webp',
        preview: true,
      },
      {
        spotId: 17,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/17/2.webp',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/17/3.webp',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/17/4.webp',
        preview: false,
      },
      {
        spotId: 17,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/17/5.webp',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/18/1.webp',
        preview: true,
      },
      {
        spotId: 18,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/18/2.webp',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/18/3.webp',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/18/4.webp',
        preview: false,
      },
      {
        spotId: 18,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/18/5.webp',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/19/1.webp',
        preview: true,
      },
      {
        spotId: 19,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/19/2.webp',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/19/3.webp',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/19/4.webp',
        preview: false,
      },
      {
        spotId: 19,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/19/5.webp',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/20/1.webp',
        preview: true,
      },
      {
        spotId: 20,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/20/2.webp',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/20/3.webp',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/20/4.webp',
        preview: false,
      },
      {
        spotId: 20,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/20/5.webp',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/21/1.webp',
        preview: true,
      },
      {
        spotId: 21,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/21/2.webp',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/21/3.webp',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/21/4.webp',
        preview: false,
      },
      {
        spotId: 21,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/21/5.webp',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/22/1.webp',
        preview: true,
      },
      {
        spotId: 22,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/22/2.webp',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/22/3.webp',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/22/4.webp',
        preview: false,
      },
      {
        spotId: 22,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/22/5.webp',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/23/1.webp',
        preview: true,
      },
      {
        spotId: 23,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/23/2.webp',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/23/3.webp',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/23/4.webp',
        preview: false,
      },
      {
        spotId: 23,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/23/5.webp',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/24/1.webp',
        preview: true,
      },
      {
        spotId: 24,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/24/2.webp',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/24/3.webp',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/24/4.webp',
        preview: false,
      },
      {
        spotId: 24,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/spot_imgs/24/5.webp',
        preview: false,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
