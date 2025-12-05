"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const products = [];

    for (let i = 1; i <= 1000; i++) {
      // title: DataTypes.STRING,
      // price: DataTypes.DECIMAL,
      // description: DataTypes.TEXT,
      // image: DataTypes.STRING,
      // category: DataTypes.STRING,
      // externalId: DataTypes.INTEGER,
      products.push({
        title: faker.commerce.productName(),
        price: faker.commerce.price({ min: 1, max: 1000, dec: 2 }),
        description: faker.commerce.productDescription(),
        image: faker.image.urlLoremFlickr({
          category: "product",
          width: 640,
          height: 480,
        }),
        categoryId: faker.number.int({ min: 1, max: 5 }),
        externalId: i,
        createdAt: now,
        updatedAt: now,
      });
    }

    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
