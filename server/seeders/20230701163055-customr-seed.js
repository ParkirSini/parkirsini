'use strict';
const { hashPassword } = require('../helpers/bcrypt');
const customers = require('./../data/customer.json')
const landlords = require('./../data/landLord.json')
const parkingSpaces = require('./../data/parkingSpace.json')
const parkingSpaceImages = require('./../data/parkingSpaceImage.json')
const parkingSpaceReviews = require('./../data/parkingSpaceReview.json')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    customers.forEach(el => {
      // delete el.id;
      el.password = hashPassword(el.password);
      el.createdAt = el.updatedAt = new Date();
    });
    landlords.forEach(el => {
      // delete el.id;
      el.password = hashPassword(el.password);
      el.createdAt = el.updatedAt = new Date();
    });
    parkingSpaces.forEach(el => {
      // delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    parkingSpaceImages.forEach(el => {
      // delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    parkingSpaceReviews.forEach(el => {
      // delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Customers', customers, {});
    await queryInterface.bulkInsert('Landlords', landlords, {});
    await queryInterface.bulkInsert('ParkingSpaces', parkingSpaces, {});
    await queryInterface.bulkInsert('ParkingSpaceImages', parkingSpaceImages, {});
    await queryInterface.bulkInsert('ParkingSpaceReviews', parkingSpaceReviews, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
    await queryInterface.bulkDelete('Landlords', null, {});
    await queryInterface.bulkDelete('ParkingSpaces', null, {});
    await queryInterface.bulkDelete('ParkingSpaceImages', null, {});
    await queryInterface.bulkDelete('ParkingSpaceReviews', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
