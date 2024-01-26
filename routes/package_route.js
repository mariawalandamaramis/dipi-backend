const express = require('express');
const router = express.Router();
const { createDonationPackage, getDonationPackageByInovationId, updateDonationPackage, deleteDonationPackage } = require('../controllers/package_controller');

router.post('/', createDonationPackage);
router.get('/', getDonationPackageByInovationId);
router.put('/:id', updateDonationPackage);
router.delete('/:id', deleteDonationPackage);

module.exports = router;
