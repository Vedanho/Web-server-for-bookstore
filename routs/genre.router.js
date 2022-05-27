const { Router } = require('express')

const { genreControllers } = require('../controllers/genre.controllers')

const router = Router()

router.post('/genre', genreControllers.addGenre )
router.delete('/genre/:id', genreControllers.deleteGenre)
router.get('/genre', genreControllers.getAllGenre)

module.exports = router
