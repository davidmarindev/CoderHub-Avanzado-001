"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const categories = [
      {
        name: "Electronics",
        slug: "electronics",
        createdAt: now,
        updatedAt: now,
      },
      { name: "Books", slug: "books", createdAt: now, updatedAt: now },
      { name: "Clothing", slug: "clothing", createdAt: now, updatedAt: now },
      {
        name: "Home & Kitchen",
        slug: "home-kitchen",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Sports & Outdoors",
        slug: "sports-outdoors",
        createdAt: now,
        updatedAt: now,
      },
    ];

    await queryInterface.bulkInsert("Categories", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
