
const { ParkingSpaceReview } = require('./../models')
class ReviewController {
    static async createReview(req, res) {
        try {
            const { review, rating } = req.body
            // parkingSpaceId 
            // customerId 
            await ParkingSpaceReview.create({ parkingSpaceId: 1, customerId: 1, review, rating })
            res.status(201).json({ msg: "Review succesfully send" })
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
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