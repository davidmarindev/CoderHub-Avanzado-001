"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //status
    //totalAmount
    //userId
    const now = new Date();
    const orders = Array.from({ length: 500 }).map(() => ({
      status: faker.helpers.arrayElement(["pending", "completed", "cancelled"]),
      totalAmount: faker.commerce.price({ min: 10, max: 500, dec: 2 }),
      userId: faker.number.int({ min: 1, max: 50 }),
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("Orders", orders, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
