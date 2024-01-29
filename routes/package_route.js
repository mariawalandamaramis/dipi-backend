const express = require('express');
const router = express.Router();
const { createDonationPackage, getDonationPackageByInovationId, updateDonationPackage, deleteDonationPackage } = require('../controllers/package_controller');
const { authenticateToken } = require('../middlewares/auth_middleware')

router.post('/', authenticateToken, createDonationPackage);
router.get('/', getDonationPackageByInovationId);
router.put('/:id', authenticateToken, updateDonationPackage);
router.delete('/:inovation_id/:id', authenticateToken, deleteDonationPackage);

module.exports = router;
