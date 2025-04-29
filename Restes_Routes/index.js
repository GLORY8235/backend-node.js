const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.listen(5000, () => {
    console.log("ON PORT 5000");
});
