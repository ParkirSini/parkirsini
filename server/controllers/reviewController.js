
const { ParkingSpaceReview } = require('./../models')
class ReviewController {
    static async getAllReview(req, res, next) {
        try {
            const reviews = await ParkingSpaceReview.findAll()
            res.status(201).json(reviews)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getReviewbyParkingSpaceId(req, res, next) {
        try {
            const id = req.params.id
            // console.log(id, "<<<<<<<<<<<<<");
            const reviews = await ParkingSpaceReview.findAll({
                where: {
                    parkingSpaceId: id
                }
            })
            res.status(201).json(reviews)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async createReview(req, res, next) {
        try {
            const { parkingSpaceId } = req.params
            const { review, rating } = req.body
            await ParkingSpaceReview.create({ parkingSpaceId: parkingSpaceId, customerId: req.customer.id, review, rating })
            res.status(201).json({ msg: "Review succesfully send" })
        } catch (error) {
            console.log(error);
            next(error)
        }


    }

    static async editReview(req, res) {
        try {
            const { id } = req.params.id
            const { review, rating } = req.body
            // parkingSpaceId 
            // customerId 
            await ParkingSpaceReview.update({ parkingSpaceId, customerId, review, rating })
            res.status(201).json("Review succesfully update")
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }

    static async deleteReview(req, res) {
        try {
            const { id } = req.params
            await ParkingSpaceReview.destroy({ id })
            res.status(200).json("Review succesfully deleted")

        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }

    }
}
module.exports = ReviewController