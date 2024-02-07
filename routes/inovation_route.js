const express = require('express');
const router = express.Router();
const { createInovation, getInovations, getInovationById, updateInovation, deleteInovation, uploadImage, uploadVideo} = require('../controllers/inovation_controller');
const { uploadMiddleware } = require('../middlewares/uploader_middleware');
const { uploadVideoMiddleware } = require('../middlewares/uploaderVideo_middleware');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/', authenticateToken, createInovation);
router.get('/', getInovations);
router.get('/:id', getInovationById);
router.put('/:id', authenticateToken, updateInovation);
router.delete('/:id', authenticateToken, deleteInovation);
router.post('/uploadimage', uploadMiddleware, uploadImage);
router.post('/uploadvideo', uploadVideoMiddleware, uploadVideo);

module.exports = router;
