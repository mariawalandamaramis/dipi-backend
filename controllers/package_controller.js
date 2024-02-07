const { DonationPackage, Inovation } = require('../models');

const getDonationPackageByInovationId = async (req, res) => {
    try {
        let packages;
        const { inovation_id } = req.query;

        if (inovation_id) {
            packages = await DonationPackage.findAll({ where: { inovation_id: inovation_id } });
        }
        return res.status(200).json({
            code: 200,
            message: 'Get Packages Success',
            data: packages
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const deleteDonationPackage = async (req, res) => {
    try {
        const package = await DonationPackage.findByPk(req.params.id);
        const inovation = await Inovation.findByPk(req.params.inovation_id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id != req.user.userId) {
            return res.status(401).json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
        if (!package) {
            return res.status(404).json({
                code: 404,
                message: 'Package not found',
                data: null
            });
        }
        await package.destroy();
        return res.json({
            code: 200,
            message: 'Package deleted successfully',
            data: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

module.exports = {
    getDonationPackageByInovationId,
    deleteDonationPackage
};
