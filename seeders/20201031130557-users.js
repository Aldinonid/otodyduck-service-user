"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mentor",
          email: "mentor@gmail.com",
          // password: await bcrypt.hash("mentor123", 10),
          job: "Mentor Otodyduck",
          role: "teacher",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Student",
          email: "student@gmail.com",
          password: await bcrypt.hash("student123", 10),
          job: "Student Otodyduck",
          role: "student",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Admin",
          email: "admin@gmail.com",
          password: await bcrypt.hash("admin123", 10),
          job: "Admin Otodyduck",
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
