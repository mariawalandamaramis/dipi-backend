const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Import your User model
const { where } = require('sequelize');
const { use } = require('../routes');
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        code: 400,
        message: 'Email is already registered',
        data: null
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      code: 201,
      message: 'Registration successful',
      data: newUser
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        code: 401,
        message: 'Invalid credentials',
        data: null
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        code: 401,
        message: 'Invalid credentials',
        data: null
      });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: null
    });
  }
};

const updateUser = async (req, res) => {
  try {

    const profile = req.file.path;
    console.log(profile);
    const userId = req.user.userId;
    console.log(userId);
    const { location, bio } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
        data: null
      });
    }

    await user.update({ location, bio, profile });

    res.json({
      code: 200,
      message: 'Update user successfully',
      data: user
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: null
    });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findByPk(userId);
    res.json({
      code: 200,
      message: 'User found',
      data: user
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: null
    });
  }
};

module.exports = { register, login, updateUser, getUser };
