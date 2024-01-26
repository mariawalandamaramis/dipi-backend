const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category_controller');

// GET all kategori
router.get('/', CategoryController.getAllCategory);

module.exports = router;
