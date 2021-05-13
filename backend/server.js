/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
const books = require('./routes/books')

app.use(cors())

app.use('/api',books)

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
