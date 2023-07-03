const request = require("supertest");
const app = require("../app");
const { sequelize, ParkingSpace } = require("../models");
const { hashPassword } = require("../helpers/bcrypt");
const data = require("../db.json");

beforeAll(async () => {
  await Promise.allSettled([
    sequelize.queryInterface.bulkInsert(
      "Landlords",
      data.landlords.map((el) => {
        delete el.id;
        el.password = hashPassword(el.password);
        el.createdAt = el.updatedAt = new Date();
        return el;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "Customers",
      data.customers.map((customer) => {
        delete customer.id;
        customer.password = hashPassword(customer.password);
        customer.createdAt = customer.updatedAt = new Date();
        return customer;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "ParkingSpaces",
      data.parkingSpaces.map((parkingSpace) => {
        delete parkingSpace.id;
        parkingSpace.createdAt = parkingSpace.updatedAt = new Date();
        return parkingSpace;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "Facilities",
      data.facilities.map((facility) => {
        delete facility.id;
        facility.createdAt = facility.updatedAt = new Date();
        return facility;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "FacilityParkings",
      data.facilityParking.map((facilityParking) => {
        delete facilityParking.id;
        facilityParking.createdAt = facilityParking.updatedAt = new Date();
        return facilityParking;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "Bookings",
      data.bookings.map((booking) => {
        delete booking.id;
        booking.createdAt = booking.updatedAt = new Date();
        return booking;
      })
    ),
    sequelize.queryInterface.bulkInsert(
      "ParkingSpaceReviews",
      data.parkingSpaceReviews.map((review) => {
        delete review.id;
        review.createdAt = review.updatedAt = new Date();
        return review;
      })
    ),
  ]);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("ParkingSpaceReviews", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Bookings", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("FacilityParkings", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Facilities", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("ParkingSpaces", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Customers", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Landlords", null, {
    cascade: true,
    restartIdentity: true,
    truncate: true,
  });
});

describe("Parking Spaces API", () => {
  describe("GET /pub/spaces - fetchAllParkingSpaces", () => {
    test("should fetch all parking spaces", async () => {
      const response = await request(app).get("/pub/spaces");
      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.any(Array));
    });

    test("should fetch all parking spaces", async () => {
      // Mocking an error by making the findAll() method throw an exception
      jest.spyOn(ParkingSpace, 'findAll').mockImplementation(() => {
        throw new Error('Failed to fetch parking spaces');
      });

      const response = await request(app).get("/pub/spaces");

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Internal server error");

      // Restore the original implementation of the findAll() method
      jest.spyOn(ParkingSpace, 'findAll').mockRestore();
    });

  });

  describe("GET /pub/spaces/:id - fetchParkingSpaceWithRelations", () => {
    test("should fetch a parking space with related data", async () => {
      const response = await request(app).get(`/pub/spaces/1`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("Landlord");
      expect(response.body).toHaveProperty("FacilityParkings");
      expect(response.body).toHaveProperty("Bookings");
      expect(response.body).toHaveProperty("ParkingSpaceReviews");
    });


    test("should handle errors and call the error handler", async () => {
      const response = await request(app).get("/pub/spaces/123");

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Data not found!!");
    });
  });
});