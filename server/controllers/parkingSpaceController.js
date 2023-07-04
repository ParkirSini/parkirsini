const { ParkingSpaceReview, ParkingSpace } = require('./../models')

class ParkingSpaceController {
    static async findAllParkingSpace(req, res, next) {
        try {
            const parkingSpaces = await ParkingSpace.findAll()
            res.status(200).json(parkingSpaces)
        } catch (error) {
            next(error)
        }
    }

    static async findOneParkingSpace(req, res, next) {
        try {
            const id = req.params.id
            const parkingSpace = await ParkingSpace.findByPk(id, {
                include: [
                    { model: ParkingSpaceReview },
                ],
            })
            if (!parkingSpace) {
                const error = new Error("ParkingSpace not found");
                error.name = "Not Found";
                throw error;
            }
            res.status(200).json(parkingSpace)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ParkingSpaceController