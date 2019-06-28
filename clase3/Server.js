const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

app.listen(PORT, () => console.log(`Listening ${PORT}`));

app.use('/public', express.static(path.join(__dirname, '/public')));

module.exports = app;
