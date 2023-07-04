const request = require("supertest");
const app = require("../app");
const { sequelize, Booking } = require("../models");

beforeAll(async () => {
   // Clean up the Customers table before running the tests
   await Booking.destroy({ truncate: true, cascade: true });
});

beforeEach(() => {
   jest.restoreAllMocks();
});

afterAll(async () => {
   // Clean up the Customers table after running the tests
   await sequelize.queryInterface.bulkDelete("Bookings", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true
   });
});

describe("createBooking", () => {
   // describe("POST /booking/generate-midtrans", () => {
   //    test("should register a new customer", async () => {
   //       const mockResponse = {
   //          status: 201,
   //          body: {
   //             token: "mockToken",
   //             redirect_url: "mockRedirectUrl"
   //          }
   //       };

   //       const mockGenerateMidtrans = jest.fn().mockResolvedValue(mockResponse);

   //       jest.spyOn(bookingController, 'generateMidtrans').mockImplementation(mockGenerateMidtrans);

   //       const response = await request(app)
   //          .post("/booking/generate-midtrans")
   //          .send({
   //             amount: "20000",
   //          });

   //       expect(response.status).toBe(mockResponse.status);
   //       expect(response.body).toHaveProperty("token", mockResponse.body.token);
   //       expect(response.body).toHaveProperty("redirect_url", mockResponse.body.redirect_url);
   //    });



   //    test("should handle empty input data and call the error handler", async () => {
   //       const errorHandlerMock = jest.fn(() => {
   //          return {
   //             status: 500,
   //             message: "Internal server error",
   //          };
   //       });

   //       const appSpy = jest.spyOn(app).mockReturnValue(errorHandlerMock);

   //       const response = await request(app)
   //          .post("/booking/generate-midtrans")
   //          .send({});

   //       expect(response.status).toBe(500);
   //       expect(response.body).toHaveProperty("message", "Internal server error");
   //       expect(errorHandlerMock).toHaveBeenCalled();

   //       appSpy.mockRestore();
   //    });
   // });
});
