const { Support, Inovation } = require('../models');

// Controller function to create a new Support instance
async function createSupport(req, res) {
  try {
    const { giver_id, inovation_id, nominal } = req.body;
    const inovation = await Inovation.findByPk(inovation_id);
    if(!inovation){
        return res.status(404).json({
            code: 404,
            message: 'Inovation not found',
            data: null
        });
    }
    if (inovation.user_id !== req.user.userId) {
        return res.status(401).json({
            code: 401,
            message: 'Inovation not yours',
            data: null
        });
    }
    const support = await Support.create({ giver_id, inovation_id, nominal });
    return res.status(201).json({
        code: 201,
        message: 'Support created successfully',
        data: support
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
    });
    }
}

// Controller function to get supports by Inovation ID
async function getSupportByInovationId(req, res) {
  try {
    const inovations = await Inovation.findAll({
        where: { user_id: req.user.userId },
        include: [{ 
          model: Support,
          as: 'support',
        }]
      });
      return res.status(200).json({
        code: 200,
        message: 'Get Support successfully',
        data: inovations
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
    });
    }
}

async function getByGiverId(req, res) {
  try {
    let nominal = 0;
    const supports = await Support.findAll({
        where: { giver_id: req.user.userId },
        include: [{ 
          model: Inovation,
          as: 'support',
        }]
      });
      for (const key of supports) {
        nominal = nominal + key.nominal;
        console.log(nominal);
      }
      // console.log(nominal);
      return res.status(200).json({
        code: 200,
        message: 'Get Support successfully',
        data: {
            supports,
            total : nominal
        }

    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
        code: 500,
        message: 'Internal server error',
        data: null
    });
    }
}

module.exports = {
  createSupport,
  getSupportByInovationId,
  getByGiverId
};
