"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = require("../data/product_mock.json");
    const now = new Date();
    const productsWithTimestamps = products.map((product) => ({
      ...product,
      createdAt: now,
      updatedAt: now,
    }));
    await queryInterface.bulkInsert("Products", productsWithTimestamps, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
