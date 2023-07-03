const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { Customer, ParkingSpace } = require("../models");
const { OAuth2Client } = require('google-auth-library');
const tokenUtils = require("../helpers/jwt");

beforeAll(async () => {
  // Clean up the Customers table before running the tests
  await Customer.destroy({ truncate: true, cascade: true });
});

afterAll(async () => {
  // Clean up the Customers table after running the tests
  await sequelize.queryInterface.bulkDelete("Customers", null, {});
});

describe("customerController", () => {
  describe("POST /pub/register - register", () => {
    test("should register a new customer", async () => {
      const response = await request(app)
        .post("/pub/register")
        .send({
          username: "JohnDoe",
          email: "johndoe@example.com",
          password: "password",
          phoneNumber: "123456789",
          address: "123 Main St",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("email", "johndoe@example.com");
    });

    test("should handle errors and call the error handler", async () => {
      const response = await request(app)
        .post("/pub/register")
        .send({
          username: "JohnDoe",
          email: "johndoe@example.com",
          password: "password",
          // Omitting the phoneNumber and address intentionally to trigger an error
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Email must be unique");
    });

    test("should handle empty input data and call the error handler", async () => {
        const response = await request(app)
          .post("/pub/register")
          .send({});
      
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toBe("Email is required");
    });
  });

  describe("POST /pub/login - login", () => {
    test("should login a customer with valid credentials", async () => {
      const response = await request(app)
        .post("/pub/login")
        .send({
          email: "johndoe@example.com",
          password: "password",
        });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("access_token");
    });

    test("should handle errors and call the error handler", async () => {
      const response = await request(app)
        .post("/pub/login")
        .send({
          email: "johndoe@example.com",
          password: "wrongpassword",
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Invalid email/password");
    });

    test("should handle empty input data and call the error handler", async () => {
        const response = await request(app)
          .post("/pub/login")
          .send({});
      
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message");
        expect(response.body.message).toBe("Email or Password is required");
    });
  });

  describe("POST /pub/google-sign-in - googleSignIn", () => {
    // test("should sign in a customer with valid Google OAuth token", async () => {
    //   // Mock the Google OAuth token
    //   const googleToken = "mockGoogleToken";
  
    //   // Mock the response from the Google API
    //   const googleAPIResponse = {
    //     email: "johndoe@example.com",
    //     name: "John Doe",
    //   };
  
    //   // Mock the verification of Google OAuth token to resolve successfully
    //   const verifyIdTokenMock = jest.fn().mockResolvedValue({
    //     getPayload: jest.fn().mockReturnValue(googleAPIResponse),
    //   });
  
    //   // Mock the OAuth2Client and assign the verifyIdTokenMock
    //   const OAuth2ClientMock = jest.fn().mockReturnValue({
    //     verifyIdToken: verifyIdTokenMock,
    //   });
  
    //   // Assign the mocked OAuth2Client to the app.locals
    //   app.locals.client = new OAuth2ClientMock();
  
    //   // Mock the token generation
    //   const accessToken = "mockAccessToken";
    //   jest.spyOn(tokenUtils, "verifyToken").mockReturnValue(accessToken);
  
    //   const response = await request(app)
    //     .post("/pub/google-sign-in")
    //     .set("Authorization", `Bearer ${googleToken}`);
  
    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty("access_token");
    // });

    test("should handle errors and call the error handler", async () => {
      // Mock the Google OAuth token
      const googleToken = "mockGoogleToken";

      // Mock the response from the Google API
      const googleAPIResponse = {
        error: "Google API error",
      };

      // Mock the verification of Google OAuth token to throw an error
      const verifyIdTokenMock = jest
        .fn()
        .mockRejectedValue(new Error(googleAPIResponse.error));

      // Mock the OAuth2Client and assign the verifyIdTokenMock
      const OAuth2ClientMock = jest.fn().mockReturnValue({
        verifyIdToken: verifyIdTokenMock,
      });

      // Assign the mocked OAuth2Client to the app.locals
      app.locals.client = new OAuth2ClientMock();

      const response = await request(app)
        .post("/pub/google-sign-in")
        .set("Authorization", `Bearer ${googleToken}`);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("message");
      expect(response.body.message).toBe("Internal server error");
    });
  });
});
