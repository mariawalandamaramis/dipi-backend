const express = require('express');
const router = express.Router();
const { createArticle, getArticleByInovationId, updateArticle, deleteArticle } = require('../controllers/article_controller');
const { authenticateToken } = require('../middlewares/auth_middleware')
const { uploadMiddleware} = require('../middlewares/uploader_middleware')

router.post('/', authenticateToken, uploadMiddleware, createArticle);
router.get('/', getArticleByInovationId);
router.put('/:id', authenticateToken, uploadMiddleware, updateArticle);
router.delete('/:inovation_id/:id', authenticateToken, deleteArticle);

module.exports = router;
