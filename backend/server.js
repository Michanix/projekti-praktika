const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Try to enter /homepage');
});


app.get('/about', (req, res) => {
    res.send('This is the Home page')
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
