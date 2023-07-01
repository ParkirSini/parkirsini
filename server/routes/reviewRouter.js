const ReviewController = require("../controllers/reviewController");
const router = require('express').Router()

router.get('/', (req, res) => { })
router.post('/', ReviewController.createReview)
router.patch('/:id', ReviewController.editReview)
router.delete('/:id', ReviewController.deleteReview)

module.exports = router


