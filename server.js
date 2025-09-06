const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

const port = 3000;

app.use('/', require('./routes/index'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));