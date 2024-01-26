const express = require('express');
const router = express.Router();
const { register, login, updateUser, getUser } = require('../controllers/user_controller');
const { uploadMiddleware } = require('../middlewares/uploader_middleware');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/register', register);
router.post('/login', login);
router.put('/:id', authenticateToken, uploadMiddleware, updateUser);
router.get('/:id', authenticateToken, getUser );

module.exports = router;
