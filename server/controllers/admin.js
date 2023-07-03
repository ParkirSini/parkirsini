const { ParkingSpace, ParkingSpaceImage, Landlord } = require("../models");
class Admin {
  //PARKING SPACE
  static async fetchParkingSpace(req, res, next) {
    try {
      const data = await ParkingSpace.findAll({
        include: [
          { model: Landlord, attributes: { exclude: ["password"] } },
          { model: ParkingSpaceImage },
        ],
        order: [["id", "ASC"]],
      });
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchParkingSpaceDetail(req, res, next) {
    try {
      const id = req.params.id;
      const data = await ParkingSpace.findOne({
        include: [
          { model: Landlord, attributes: { exclude: ["password"] } },
          { model: ParkingSpaceImage },
        ],
        where: {
          id,
        },
      });
      if (!data) throw { name: "Not Found" };
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createParkingSpace(req, res, next) {
    try {
      const { stock, name, subtitle, description, city } = req.body;
      const landlordId = req.user.id;
      const mapLong = req.body.mapLong || 0;
      const mapLat = req.body.mapLat || 0;

      const newSpace = await ParkingSpace.create({
        landlordId,
        stock,
        mapLong,
        mapLat,
        name,
        subtitle,
        description,
        city,
      });
      res
        .status(201)
        .json({ message: "Create parking space success", data: newSpace });
    } catch (error) {
      next(error);
    }
  }

  static async editParkingSpace(req, res, next) {
    try {
      const id = req.params.id;
      const { stock, name, subtitle, description, city } = req.body;
      const mapLong = req.body.mapLong || 0;
      const mapLat = req.body.mapLat || 0;

      await ParkingSpace.update(
        {
          stock,
          mapLong,
          mapLat,
          name,
          subtitle,
          description,
          city,
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Update parking space success" });
    } catch (error) {
      console.log(error);
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

  //PARKING SPACE IMAGE
  static async fetchParkingSpaceImages(req, res, next) {
    try {
      const data = await ParkingSpaceImage.findAll({ order: [["id", "ASC"]] });
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async fetchOneParkingSpaceImage(req, res, next) {
    try {
      const id = req.params.id;
      const data = await ParkingSpaceImage.findOne({
        where: {
          id,
        },
      });
      if (!data) throw { name: "Not Found" };
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async uploadParkingSpaceImage(req, res, next) {
    try {
      const parkingSpaceId = req.params.id;
      const { imgUrl } = req.body;

      const newImage = await ParkingSpaceImage.create({
        parkingSpaceId,
        imgUrl,
      });
      res.status(201).json({
        message: `Added new image for Parking Space ${parkingSpaceId}`,
        data: newImage,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteParkingSpaceImage(req, res, next) {
    try {
      const id = req.params.id;

      const newImage = await ParkingSpaceImage.destroy({ where: { id } });
      res.status(201).json({ message: "Parking space image deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Admin;
