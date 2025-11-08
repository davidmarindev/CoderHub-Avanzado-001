"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
          phone: "123-456-7890",
          age: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          password: "password456",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "987-654-3210",
          age: 25,
        },
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          password: "password789",
          phone: "555-555-5555",
          age: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
