const { Support, Inovation, DonationPackage } = require('../models');

async function createSupport(req, res) {
  try {
    const { inovation_id, nominal, package_id } = req.body;
    const userId = req.user.userId;
    const inovation = await Inovation.findByPk(inovation_id);
    
    if(!inovation){
        return res.status(404).json({
            code: 404,
            message: 'Inovation not found',
            data: null
        });
    }
    const fee = 1000;
    const updatedNominal = nominal - fee;
    const support = await Support.create({ giver_id:userId, inovation_id, package_id, nominal: updatedNominal, fee:fee });
    let totalSupport = inovation.total_support || 0;
    totalSupport = totalSupport + updatedNominal;
    await Inovation.update({ total_support: totalSupport }, { where: { id: inovation_id } });

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

async function getSupportByInovationId(req, res) {
  try {
    const inovations = await Inovation.findAll({
      where: { user_id: req.user.userId },
      include: [{ 
        model: Support,
        as: 'supports',
        include: [{ 
          model: DonationPackage, 
          as: 'packageDonate' 
        }]
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
        as: 'supports', 
      }]
    });
    for (const key of supports) {
      nominal = nominal + key.nominal;
    }
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
