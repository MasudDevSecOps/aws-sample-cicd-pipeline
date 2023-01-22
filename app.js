const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello people!!Thank you for visiting our site. Have a good day!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
