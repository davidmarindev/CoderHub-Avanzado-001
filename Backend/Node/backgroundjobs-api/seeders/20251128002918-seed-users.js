"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const users = Array.from({ length: 50 }).map(() => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
