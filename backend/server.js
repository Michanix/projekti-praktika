const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Try to enter /homepage!');
});


app.get('/homepage', (req, res) => {
    res.send('This is the homepage')
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
