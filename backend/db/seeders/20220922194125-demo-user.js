'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'user1@user.io',
        firstName: 'Demo1',
        lastName: 'User',
        username: 'DemoUser1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        firstName: 'Demo2',
        lastName: 'User',
        username: 'DemoUser2',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user3@user.io',
        firstName: 'Demo3',
        lastName: 'User',
        username: 'DemoUser3',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user4@user.io',
        firstName: 'Demo4',
        lastName: 'User',
        username: 'DemoUser4',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user5@user.io',
        firstName: 'Demo5',
        lastName: 'User',
        username: 'DemoUser5',
        hashedPassword: bcrypt.hashSync('password')
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser1', 'DemoUser2', 'DemoUser3', 'DemoUser4', 'DemoUser5'] }
    }, {});
  }
};
