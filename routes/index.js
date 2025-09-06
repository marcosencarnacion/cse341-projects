const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/ivon', lesson1Controller.ivonRoute);
routes.get('/ian', lesson1Controller.ianRoute);
routes.get('/logan', lesson1Controller.loganRoute);

module.exports = routes;