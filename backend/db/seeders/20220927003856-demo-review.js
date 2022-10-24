'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      {
        // id:1
        spotId: 1,
        userId: 2,
        review: 'The views are amazing. The house is lovely and the hosts are very responsive. I would recommend this home to anyone and will definitely stay here again.',
        stars: 5,
      },
      {
        // id:2
        spotId: 1,
        userId: 3,
        review: "Great place with an amazing view !!! Love location and all the accommodations. Definitely wished I could've stayed longer and can't wait to come back another time.",
        stars: 5,
      },
      {
        // id:3
        spotId: 1,
        userId: 4,
        review: 'Great home with an amazing view and the communication with the host was unmatched.',
        stars: 4,
      },
      {
        // id:4
        spotId: 2,
        userId: 1,
        review: "What a great place to stay. Very clean and nice. Bed was super comfortable. A very cozy place to lay your head.",
        stars: 5,
      },
      {
        // id: 5
        spotId: 3,
        userId: 3,
        review: "Great location, easy parking, close to everything!",
        stars: 4,
      },
      {
        // id: 6
        spotId: 3,
        userId: 5,
        review: "The guest suite was very clean and in a fantastic location. it had everything we needed and Casey was a communicative and accommodating host. A great find!",
        stars: 5,
      },
      {
        // id: 7
        spotId: 4,
        userId: 2,
        review: 'My favorite treehouse stay so far! Elyse thought of everything to make this adventurous vacation complete!',
        stars: 5,
      },
      {
        //id:8
        spotId: 5,
        userId: 1,
        review: 'Great stay!',
        stars: 4,
      },
      {
        //id: 9
        spotId: 6,
        userId: 3,
        review: "Our visit to Crystal Beach & stay at Front Row Sea't was awesome.",
        stars: 5,
      },
      {
        //id: 10
        spotId: 7,
        userId: 4,
        review: 'It was a fabulous place for a multigenerational family week. We cooked every night and loved the kitchen. The view was the best ever. All in all a great stay.',
        stars: 5,
      },
      {
        //id: 11
        spotId: 7,
        userId: 2,
        review: "Overall we enjoyed our stay. There were things we liked and things we didn't.",
        stars: 4,
      },
      {
        //id: 12
        spotId: 8,
        userId: 1,
        review: "This cabin was everything we needed for a perfect getaway. Cozy and quaint, beautiful front and back deck, equipped kitchen and comfy beds. Forest feel, quiet and relaxing, I didn't want to leave!",
        stars: 5,
      },
      {
        //id: 13
        spotId: 9,
        userId: 1,
        review: "Highly recommend. Amazing area, tranquil and quiet. Fun experience in a tiny house. Loved falling sleep and waking up in the large window looking at the forest.",
        stars: 5,
      },
      {
        //id: 14
        spotId: 9,
        userId: 2,
        review: "Beautiful stay",
        stars: 4,
      },
      {
        //id: 15
        spotId: 10,
        userId: 5,
        review: "We had the best time at the llama farm!!!! So grateful for Bonnie!!!",
        stars: 5,
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
