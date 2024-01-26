const { DonationPackage } = require('../models');

// Controller to create new DonationPackage
const createDonationPackage = async (req, res) => {
    try {
        const { inovation_id, package_name, nominal, description } = req.body;
        const newDonationPackage = await DonationPackage.create({
            inovation_id,
            package_name,
            nominal,
            description
        });
        res.status(201).json({
            code: 201,
            message: 'Donation Package created successfully',
            data: newDonationPackage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to get DonationPackage by Inovation ID
const getDonationPackageByInovationId = async (req, res) => {
    try {
        let packages;
        const { inovation_id } = req.query;

        if (inovation_id) {
            packages = await DonationPackage.findAll({ where: { inovation_id: inovation_id} });
        }
        res.status(200).json({
            code: 200,
            message: 'Get Packages Success',
            data: packages
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to update DonationPackage
const updateDonationPackage = async (req, res) => {
    try {
        const { inovation_id, package_name, nominal, description } = req.body;
        const package = await DonationPackage.findByPk(req.params.id);
        if (!package) {
            return res.status(404).json({
                code: 404,
                message: 'package not found',
                data: null
            });
        }
        await package.update({
            inovation_id,
            package_name,
            nominal,
            description
        });
        res.json({
            code: 200,
            message: 'package updated successfully',
            data: package
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

// Controller to delete DonationPackage
const deleteDonationPackage = async (req, res) => {
    try {
        const package = await DonationPackage.findByPk(req.params.id);
        if (!package) {
            return res.status(404).json({
                code: 404,
                message: 'Package not found',
                data: null
            });
        }
        await package.destroy();
        res.json({
            code: 200,
            message: 'Package deleted successfully',
            data: null
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

module.exports = {
    createDonationPackage,
    getDonationPackageByInovationId,
    updateDonationPackage,
    deleteDonationPackage
};
