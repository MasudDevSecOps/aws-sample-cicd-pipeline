const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Finalize the pipeline by adding a manual approval stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
