const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/ian', lesson1Controller.ianRoute);
app.get('/logan', lesson1Controller.loganRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));