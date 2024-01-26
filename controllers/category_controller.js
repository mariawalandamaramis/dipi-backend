const { Category } = require('../models');

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    return res.status(200).json({
      code: 200,
      message: 'Categories found',
      data: category
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
  getAllCategory,
};
