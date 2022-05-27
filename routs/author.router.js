const { Router } = require('express')

const { authorController } = require('../controllers/author.controller')

const router = Router()

router.post('/author', authorController.addAuthor)
router.delete('/author', authorController.deleteAuthor)

module.exports = router