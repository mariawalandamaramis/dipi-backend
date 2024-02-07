const { Inovation, DonationPackage } = require('../models');

const uploadImage = async (req, res) => {
    try {
        if (!req.file.path) {
            return res.status(req.err.code).json({
                code: req.err.code,
                message: req.err,
                data: null
            })
        }
        const imageUrl = req.file.path;
        return res.status(201).json({
            code: 201,
            message: "Upload success",
            data: imageUrl
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const uploadVideo = async (req, res) => {
    try {
        if (!req.file.path) {
            return res.status(req.err.code).json({
                code: req.err.code,
                message: req.err,
                data: null
            })
        }
        const videoUrl = req.file.path;
        return res.status(201).json({
            code: 201,
            message: "Upload success",
            data: videoUrl
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const createInovation = async (req, res) => {
    try {
        const {
            inovation_name,
            description,
            city_id,
            image,
            video,
            amount,
            duration,
            category_id,
            package_names, 
            package_nominals, 
            package_descriptions, 
            package_souvenirs, 
        } = req.body;
        const userId = req.user.userId;
        
        const newInovation = await Inovation.create({
            inovation_name,
            description,
            city_id,
            image,
            video,
            amount,
            user_id: userId,
            duration,
            category_id,
            flag_active: true
        });

        const createdPackages = [];
        for (let i = 0; i < 3; i++) {
            const newPackage = await DonationPackage.create({
                inovation_id: newInovation.id, 
                package_name: package_names[i], 
                nominal: package_nominals[i], 
                description: package_descriptions[i], 
                souvenir: package_souvenirs[i], 
            });
            createdPackages.push(newPackage);
        }

        res.status(201).json({
            code: 201,
            message: 'Create innovation and donation packages successfully',
            data: {
                innovation: newInovation,
                packages: createdPackages
            }
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

const getInovations = async (req, res) => {
    try {
        let inovations;
        const { user_id, category_id, city_id, sort } = req.query;

        if (user_id) {
            inovations = await Inovation.findAll({ where: { user_id: user_id, flag_active: true } });
        } else if (category_id) {
            inovations = await Inovation.findAll({ where: { category_id: category_id, flag_active: true } });
        } else if (city_id) {
            inovations = await Inovation.findAll({ where: { city_id: city_id, flag_active: true } });
        } else if (sort === 'latest') {
            inovations = await Inovation.findAll({ order: [['createdAt', 'DESC']] }, { where: { flag_active: true } });
        } else {
            inovations = await Inovation.findAll({ where: { flag_active: true } });
        }
        res.status(200).json({
            code: 200,
            message: 'Get Inovations Success',
            data: inovations
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

const getInovationById = async (req, res) => {
    try {
        const inovation = await Inovation.findOne({ where: { id: req.params.id, flag_active: true } });
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        res.json({
            code: 200,
            message: 'Inovation found',
            data: inovation
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

const updateInovation = async (req, res) => {
    try {
        const userId = req.user.userId;
        const {
            inovation_name,
            description,
            city_id,
            image,
            video,
            amount,
            duration,
            category_id,
            package_names, 
            package_nominals, 
            package_descriptions, 
            package_souvenirs, 
        } = req.body;
        const inovation = await Inovation.findByPk(req.params.id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id == userId) {
            await inovation.update({
                inovation_name,
                description,
                city_id,
                image,
                video,
                amount,
                duration,
                category_id,
            });

            const donationPackages = await DonationPackage.findAll({ where: { inovation_id: inovation.id } });
            for (let i = 0; i < donationPackages.length; i++) {
                await donationPackages[i].update({
                    package_name: package_names[i], 
                    nominal: package_nominals[i], 
                    description: package_descriptions[i], 
                    souvenir: package_souvenirs[i], 
                });
            }

            res.json({
                code: 200,
                message: 'Inovation and Donation Packages updated successfully',
                data: inovation
            });
        } else {
            res.json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};


const deleteInovation = async (req, res) => {
    try {
        const userId = req.user.userId;
        const inovation = await Inovation.findByPk(req.params.id);
        if (!inovation) {
            return res.status(404).json({
                code: 404,
                message: 'Inovation not found',
                data: null
            });
        }
        if (inovation.user_id == userId) {
            await inovation.update({
                flag_active: false
            });
            res.json({
                code: 200,
                message: 'Inovation deleted successfully',
                data: null
            });
        } else {
            res.json({
                code: 401,
                message: 'Inovation not yours',
                data: null
            });
        }
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
    createInovation,
    getInovations,
    getInovationById,
    updateInovation,
    deleteInovation,
    uploadImage,
    uploadVideo
};
