const express = require('express');
const router = express.Router();
const { createInovation, getInovations, getInovationById, updateInovation, deleteInovation, } = require('../controllers/inovation_controller');
const { uploadMiddleware } = require('../middlewares/uploader_middleware');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/', authenticateToken, uploadMiddleware, createInovation);
router.get('/', getInovations);
router.get('/:id', getInovationById);
router.put('/:id', authenticateToken, uploadMiddleware, updateInovation);
router.delete('/:id', authenticateToken, deleteInovation);

module.exports = router;
