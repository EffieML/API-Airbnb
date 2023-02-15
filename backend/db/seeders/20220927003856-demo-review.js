'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      // spot 1 ------------------------------------------
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
      // spot 2 ------------------------------------------
      {
        // id:4
        spotId: 2,
        userId: 1,
        review: "What a great place to stay. Very clean and nice. Bed was super comfortable. A very cozy place to lay your head.",
        stars: 5,
      },
      // spot 3 ------------------------------------------
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
      // spot 4 ------------------------------------------
      {
        // id: 7
        spotId: 4,
        userId: 2,
        review: 'My favorite treehouse stay so far! Elyse thought of everything to make this adventurous vacation complete!',
        stars: 5,
      },
      // spot 5 ------------------------------------------
      {
        //id:8
        spotId: 5,
        userId: 1,
        review: 'Great stay!',
        stars: 4,
      },
      // spot 6 ------------------------------------------
      {
        //id: 9
        spotId: 6,
        userId: 3,
        review: "Our visit to Crystal Beach & stay at Front Row Sea't was awesome.",
        stars: 5,
      },
      // spot 7 ------------------------------------------
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
      // spot 8 ------------------------------------------
      {
        //id: 12
        spotId: 8,
        userId: 1,
        review: "This cabin was everything we needed for a perfect getaway. Cozy and quaint, beautiful front and back deck, equipped kitchen and comfy beds. Forest feel, quiet and relaxing, I didn't want to leave!",
        stars: 5,
      },
      // spot 9 ------------------------------------------
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
      // spot 10 ------------------------------------------
      {
        //id: 15
        spotId: 10,
        userId: 5,
        review: "We had the best time at the llama farm!!!! So grateful for Bonnie!!!",
        stars: 5,
      },
      // spot 11 ------------------------------------------
      {
        //id: 16
        spotId: 11,
        userId: 3,
        review: "Loved the stay and look forward to staying here again in the future . It was so peaceful !",
        stars: 5,
      },
      {
        //id: 17
        spotId: 11,
        userId: 4,
        review: "Friendly, clean, and great location!",
        stars: 4,
      },
      // spot 12 ------------------------------------------
      {
        //id: 18
        spotId: 12,
        userId: 5,
        review: "This place is amazing. If you are going to stay in Austin this is the perfect place!",
        stars: 5,
      },
      // spot 13 ------------------------------------------
      {
        //id: 19
        spotId: 13,
        userId: 7,
        review: "This houseboat was beautifully kept and the extra amenities were the cherry on top! Highly recommend.",
        stars: 4,
      },
      // spot 14 ------------------------------------------
      {
        //id: 20
        spotId: 14,
        userId: 1,
        review: "Great place for large gatherings and celebrations. Clean and comfortable.",
        stars: 5,
      },
      {
        //id: 21
        spotId: 14,
        userId: 5,
        review: "Our stay at 12 Armadillos was wonderful. The themed rooms were darling, the decor and exterior of the home were so charming.",
        stars: 5,
      },
      // spot 15 ------------------------------------------
      {
        //id: 22
        spotId: 15,
        userId: 4,
        review: "Great little getaway!",
        stars: 4,
      },
      // spot 16 ------------------------------------------
      {
        //id: 23
        spotId: 16,
        userId: 6,
        review: "The views are amazing. It does get cold at night so pack extra sleeping bags.",
        stars: 4,
      },
      {
        //id: 24
        spotId: 16,
        userId: 3,
        review: "Incredible stay! The tipi was very spacious and comfortable.",
        stars: 5,
      },
      // spot 17 ------------------------------------------
      {
        //id: 25
        spotId: 17,
        userId: 1,
        review: "Thank you!",
        stars: 4,
      },
      {
        //id: 26
        spotId: 17,
        userId: 5,
        review: "I love it , was amazing art every where just awesome . Staying again !",
        stars: 5,
      },
      // spot 18 ------------------------------------------
      {
        //id: 27
        spotId: 18,
        userId: 7,
        review: "Get place to get away and relax.",
        stars: 4,
      },
      // spot 19 ------------------------------------------
      {
        //id: 28
        spotId: 19,
        userId: 6,
        review: "That Little Cabin was everything you see and MORE! Spacious, comfortable, clean, well appointed, and easy to find, this cabin will definitely be on repeat for our family.",
        stars: 5,
      },
      {
        //id: 29
        spotId: 19,
        userId: 2,
        review: "Beautiful cabin, every detail thought through. Absolutely stunning!",
        stars: 5,
      },
      // spot 20 ------------------------------------------
      {
        //id: 30
        spotId: 20,
        userId: 3,
        review: "We had a great getaway weekend. Place was charming and loved all the little Hobbit-y touches!",
        stars: 5,
      },
      // spot 21 ------------------------------------------
      {
        //id: 31
        spotId: 21,
        userId: 2,
        review: "Great, cute little place. Love the theme!",
        stars: 4,
      },
      {
        //id: 32
        spotId: 21,
        userId: 5,
        review: "Beautiful stay with wonderful hosts.",
        stars: 5,
      },
      // spot 22 ------------------------------------------
      {
        //id: 33
        spotId: 22,
        userId: 7,
        review: "Everything is just perfect! Just like the pictures.",
        stars: 5,
      },
      // spot 23 ------------------------------------------
      {
        //id: 34
        spotId: 23,
        userId: 4,
        review: "Cool experience to stay in rail cart apt.",
        stars: 4,
      },
      // spot 24 ------------------------------------------
      {
        //id: 35
        spotId: 24,
        userId: 7,
        review: "Magical & memorable! This was such a fun and unique experience for my family.",
        stars: 5,
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
