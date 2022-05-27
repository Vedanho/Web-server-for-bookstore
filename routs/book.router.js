const { Router } = require('express')

const router = Router()

const { bookController } = require('../controllers/books.controller')

router.post('/book',bookController.addBook)
router.delete('/book/:id',bookController.deleteBook)
router.patch('/book/:id',bookController.patchBook)
router.get('/book/:id',bookController.getBookById)
router.get('/books',bookController.getAllBooks)
router.get('/book/genre/:id',bookController.getBooksByGenre)

module.exports = router