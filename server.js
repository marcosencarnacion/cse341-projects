const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.ianRoute);
app.get('/', lesson1Controller.ivonRoute);
app.get('/', lesson1Controller.loganRoute);

app.use('/', require('./routes/index'));

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));