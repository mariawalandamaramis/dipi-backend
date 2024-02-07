const express = require('express');
const router = express.Router();
const { getDonationPackageByInovationId, deleteDonationPackage } = require('../controllers/package_controller');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.get('/', getDonationPackageByInovationId);
router.delete('/:inovation_id/:id', authenticateToken, deleteDonationPackage);

module.exports = router;
