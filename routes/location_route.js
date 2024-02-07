const express = require('express');
const { getAllCity } = require('../controllers/location_controller');
const router = express.Router();

router.get('/cities', getAllCity)

module.exports = router