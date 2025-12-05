"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const items = Array.from({ length: 2500 }).map(() => ({
      orderId: faker.number.int({ min: 1, max: 500 }),
      productId: faker.number.int({ min: 1, max: 1000 }),
      quantity: faker.number.int({ min: 1, max: 10 }),
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("OrderItems", items, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderItems", null, {});
  },
};
