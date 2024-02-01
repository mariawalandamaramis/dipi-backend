const express = require('express');
const router = express.Router();
const { createSupport, getSupportByInovationId, getByGiverId } = require('../controllers/support_controller');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/', authenticateToken, createSupport);
router.get('/getbyinovation', authenticateToken, getSupportByInovationId);
router.get('/getbygiver', authenticateToken, getByGiverId);

module.exports = router;
