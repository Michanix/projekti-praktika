/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const books = require('google-books-search');

var randomWords = require('random-words');

router.get('/books', (req, res) => {
    const options = {
        field: 'title',
        offset: 0,
        limit: 9,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };

    books.search(randomWords(), options, (error, results) => {
        if ( ! error ) {
            res.send(results)
            console.log(results);
        } else {
            console.log(error);
        }
    });
})

router.get('/books/search/:value', (req, res) => {
    const options = {
        field: 'title',
        offset: 0,
        limit: 9,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };

    books.search(req.params.value, options, (error, results) => {
        if ( ! error ) {
            res.send(results)
            console.log(results);
        } else {
            console.log(error);
        }
    });
})

router.get('/books/lookup/:value', (req, res) => {
    const options = {
        field: 'subject',
        offset: 0,
        limit: 9,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };
    
    books.lookup(req.params.value, options, (error, results) => {
        if ( ! error ) {
            res.send(results)
            console.log(results);
        } else {
            console.log(error);
        }
    });
})

router.get('/books/subject/:category/', (req, res) => {
    var options = {
        field: 'subject',
        offset: 0,
        limit: 9,
        type: 'books',
        order: 'relevance',
        lang: 'en'
    };
    books.search(req.params.category, options, function(error, results) {
        if ( ! error ) {
            res.send(results)
            console.log(results);
        } else {
            console.log(error);
        }
    });
});
    

router.get('/books/:category/:id/', (req, res) => res.send(`${req.params.category} ${req.params.id}`))

module.exports = router