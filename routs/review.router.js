const { Router } = require('express')

const { reviewControllers } = require('../controllers/review.controllers')

const router = Router()

router.post('/review', reviewControllers.addReview)
router.delete('/review/:id',reviewControllers.deleteReview)
router.get('/review/:id',reviewControllers.getReviewByBook)

module.exports = router 