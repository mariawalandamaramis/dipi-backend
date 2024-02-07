const express = require('express');
const app = express();
const routes = require('./user_route');
const categoryRoutes = require('./category_route');
const inovationRoutes = require('./inovation_route');
const packageRoutes = require('./package_route');
const articleRoutes = require('./article_route');
const locationRoutes = require('./location_route')

app.use('/users', routes); 
app.use('/category', categoryRoutes);
app.use('/inovation', inovationRoutes);
app.use('/package', packageRoutes);
app.use('/article', articleRoutes);
app.use('/location', locationRoutes);

module.exports = app;