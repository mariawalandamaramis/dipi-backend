const express = require('express');
const app = express();
const routes = require('./user_route');
const categoryRoutes = require('./category_route');
const inovationRoutes = require('./inovation_route');
const packageRoutes = require('./package_route');

app.use('/users', routes); // Set up your routes under '/api'
app.use('/category', categoryRoutes);
app.use('/inovation', inovationRoutes);
app.use('/package', packageRoutes);

module.exports = app;