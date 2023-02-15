'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ReviewImages', [
      // spot 1 ------------------------------------------
      {
        reviewId: 1,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/1/1.webp',
      },
      {
        reviewId: 2,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/1/2.webp',
      },
      {
        reviewId: 3,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/1/3.webp',
      },
      // spot 2 ------------------------------------------
      {
        reviewId: 4,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/2/1.webp',
      },
      // spot 3 ------------------------------------------
      {
        reviewId: 5,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/3/1.webp',
      },
      {
        reviewId: 6,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/3/2.jpeg',
      },
      // spot 4 ------------------------------------------
      {
        reviewId: 7,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/4/1.webp',
      },
      // spot 5 ------------------------------------------
      {
        reviewId: 8,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/5/1.webp',
      },
      // spot 6 ------------------------------------------
      {
        reviewId: 9,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/6/1.webp',
      },
      // spot 7 ------------------------------------------
      {
        reviewId: 10,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/7/1.webp',
      },
      {
        reviewId: 11,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/7/2.webp',
      },
      // spot 8 ------------------------------------------
      // {
      //   reviewId: 12,
      //   url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20958243/original/b0875f23-489c-4515-ac2b-d737cac9f10c.jpeg?im_w=1200',
      // },
      // spot 9 ------------------------------------------
      {
        reviewId: 13,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/9/1.webp',
      },
      {
        reviewId: 14,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/9/2.webp',
      },
      // spot 10 ------------------------------------------
      {
        reviewId: 15,
        url: 'https://mingprojectawsbucket.s3.amazonaws.com/staybnbseed/review_imgs/10/1.webp',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ReviewImages', null, {});
  }
};
