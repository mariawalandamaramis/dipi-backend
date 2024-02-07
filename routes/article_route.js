const express = require('express');
const router = express.Router();
const { createArticle, getArticleByInovationId, updateArticle, deleteArticle } = require('../controllers/article_controller');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/', authenticateToken, createArticle);
router.get('/', getArticleByInovationId);
router.put('/:id', authenticateToken, updateArticle);
router.delete('/:inovation_id/:id', authenticateToken, deleteArticle);

module.exports = router;
