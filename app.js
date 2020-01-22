const express = require('express');
const app = express();

app.get('/public',express.static(path.join(__dirname,'static')));
app.use()

