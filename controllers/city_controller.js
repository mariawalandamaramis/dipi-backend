const { City } = require('../models');

const getCities = async (req, res) => {
    try {
        let cities;
        if (req.query.province) {
            cities = await City.findAll({
                where: { province: req.query.province }
            });
            res.status(200).json({
                code: 200,
                message: `Get Cities in ${req.query.province} Success`,
                data: cities
            });
        } else {
            cities = await City.findAll();
            res.status(200).json({
                code: 200,
                message: 'Get Cities Success',
                data: cities
            });
        }
    } catch (error) {
        console.error('Error getting cities:', error);
        res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

module.exports = {
    getCities
};
