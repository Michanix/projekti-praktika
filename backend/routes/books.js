var express = require('express')
var router = express.Router()

router.get('/books/', (req, res) => res.send('Got a GET request at /api/books/'))

router.get('/books/:category/', (req, res) => res.send(`${req.params.category}`))

router.get('/books/:category/:id/', (req, res) => res.send(`${req.params.category} ${req.params.id}`))
module.exports = router