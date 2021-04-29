/* eslint-disable no-undef */
var express = require('express')
var router = express.Router()
var books2 = require('google-books-search');

router.get('/books/search/:value', (req, res) => {
    
    var options = {
        field: 'title',
        offset: 0,
        limit: 4,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };
    books2.search(req.params.value, options, function(error, results) {
        if ( ! error ) {
            res.send(results)
            console.log(results);
        } else {
            console.log(error);
        }
    });
})

router.get('/books/', (req, res) => res.send('Got a GET request at /api/books/'))

router.get('/books/:category/', (req, res) => res.send(`${req.params.category}`))

router.get('/books/:category/:id/', (req, res) => res.send(`${req.params.category} ${req.params.id}`))

module.exports = router