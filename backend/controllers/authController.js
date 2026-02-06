const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @desc    Register new user (donor or hospital)
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const { 
      name, 
      email, 
      password, 
      userType, 
      bloodType,
      phoneNumber,
      hospitalName,
      hospitalType,
      licenseNumber,
      gender,
      dateOfBirth,
      address
    } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Validate userType-specific fields
    if (userType === 'donor') {
      if (!bloodType) {
        return res.status(400).json({
          success: false,
          message: 'Blood type is required for donors'
        });
      }
    }

    if (userType === 'hospital') {
      if (!hospitalName || !hospitalType || !licenseNumber) {
        return res.status(400).json({
          success: false,
          message: 'Hospital name, type, and license number are required for hospitals'
        });
      }
    }

    // Create user object based on userType
    const userData = {
      name,
      email,
      password,
      userType,
      phoneNumber
    };

    // Add donor-specific fields
    if (userType === 'donor') {
      userData.bloodType = bloodType;
      if (gender) userData.gender = gender;
      if (dateOfBirth) userData.dateOfBirth = dateOfBirth;
      if (address) userData.address = address;
    }

    // Add hospital-specific fields
    if (userType === 'hospital') {
      userData.hospitalName = hospitalName;
      userData.hospitalType = hospitalType;
      userData.licenseNumber = licenseNumber;
      if (address) userData.address = address;
    }

    // Create user
    const user = await User.create(userData);

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          bloodType: user.bloodType,
          hospitalName: user.hospitalName,
          phoneNumber: user.phoneNumber
        },
        token
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({
      success: false,
      message: 'Error registering user',
      error: error.message
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Check for user (include password field)
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        bloodType: user.bloodType,
        hospitalName: user.hospitalName,
        phoneNumber: user.phoneNumber,
        isAvailable: user.isAvailable
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      notificationPreferences: req.body.notificationPreferences
    };

    // Add userType-specific fields
    if (req.user.userType === 'donor') {
      if (req.body.gender) fieldsToUpdate.gender = req.body.gender;
      if (req.body.dateOfBirth) fieldsToUpdate.dateOfBirth = req.body.dateOfBirth;
    }

    if (req.user.userType === 'hospital') {
      if (req.body.hospitalName) fieldsToUpdate.hospitalName = req.body.hospitalName;
      if (req.body.hospitalType) fieldsToUpdate.hospitalType = req.body.hospitalType;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      fieldsToUpdate,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating profile',
      error: error.message
    });
  }
};

// @desc    Logout user / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User logged out successfully'
  });
};