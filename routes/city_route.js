const express = require('express');
const router = express.Router();
const { getCities } = require('../controllers/city_controller');


router.get('/', getCities);

module.exports = router;
