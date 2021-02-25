"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hilman Ramadhan",
          email: "hilman@gmail.com",
          password: await bcrypt.hash("hilman123", 10),
          avatar: "http://45.32.102.238/images/user/1614159144050.jpg",
          job: "Full-stack Developer",
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
        {
          name: "Sandhika Galih",
          email: "sandhika@gmail.com",
          password: await bcrypt.hash("sandhika123", 10),
          avatar: "http://45.32.102.238/images/user/1614162501201.jpg",
          job: "Front-End Developer",
          role: "teacher",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ipung Purwono",
          email: "ipung@gmail.com",
          password: await bcrypt.hash("ipung123", 10),
          avatar: "http://45.32.102.238/images/user/1614177765824.jpg",
          job: "iOS Developer",
          role: "teacher",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Eko Kurniawan Khannedy",
          email: "khannedy@gmail.com",
          password: await bcrypt.hash("khannedy123", 10),
          avatar: "http://45.32.102.238/images/user/1614179168338.jpg",
          job: "Technical Architect",
          role: "teacher",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Angga Risky",
          email: "angga@gmail.com",
          password: await bcrypt.hash("angga123", 10),
          avatar: "http://45.32.102.238/images/user/1614179887960.jpg",
          job: "Technical Architect",
          role: "teacher",
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
