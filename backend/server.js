const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
});


app.get('/about', (req, res) => {
    res.send('About page')
})


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
