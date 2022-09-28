'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '7000 Seawall Blvd',
        city: 'Galveston',
        state: 'Texas',
        country: 'United States',
        lat: 29.26230902716777,
        lng: -94.83468010314624,
        name: "Home in Galveston",
        description: "Charming carriage house in Galveston’s East End",
        price: 189,
      },
      {
        ownerId: 3,
        address: '6550 Comanche Trail',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        lat: 30.405846046109602,
        lng: -97.87408455917473,
        name: "Home in Austin",
        description: "Private In-Law Suite Walkable to Marina",
        price: 486,
      },
      {
        ownerId: 4,
        address: '400 Broad St',
        city: 'Seattle',
        state: 'Washington',
        country: 'United States',
        lat: 47.6214356083016,
        lng: -122.34895801722446,
        name: "Home in Seattle",
        description: "Waterfront Condo near Pike Mkt",
        price: 209,
      },
      {
        ownerId: 5,
        address: '611 SW Kingston Ave',
        city: 'Portland',
        state: 'Oregon',
        country: 'United States',
        lat: 45.51937013549017,
        lng: -122.70853164871765,
        name: "Home in Portland",
        description: "Treehouse Glamping Adventure in Portland, Oregon",
        price: 162,
      },
      {
        ownerId: 2,
        address: '3601 Lyon St',
        city: 'San Francisco',
        state: 'California',
        country: 'United States',
        lat: 37.80787733472923,
        lng: -122.44721430093985,
        name: "Home in San Francisco",
        description: "Right in Union Square -Two Double Bed Studio Suite",
        price: 257,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
