const { ParkingSpace, ParkingSpaceImage, Landlord } = require("../models");
class Admin {
  static async fetchParkingSpace(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  static async createParkingSpace(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  static async editParkingSpace(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  static async deleteParkingSpace(req, res, next) {
    try {
      const id = req.params.id;
      await ParkingSpace.destroy({ where: { id } });
      res.status(201).json({ message: "Parking Space Deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Admin;
