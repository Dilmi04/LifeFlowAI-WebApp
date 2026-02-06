const User = require('../models/User');
const Donation = require('../models/Donation');

// @desc    Get all donors
// @route   GET /api/donors
// @access  Private (Hospital)
exports.getDonors = async (req, res) => {
  try {
    const { bloodType, city, isAvailable } = req.query;
    let query = { userType: 'donor' };
    
    if (bloodType) query.bloodType = bloodType;
    if (city) query.city = new RegExp(city, 'i');
    if (isAvailable !== undefined) query.isAvailable = isAvailable === 'true';
    
    const donors = await User.find(query).select('-password').sort('-donationCount');
    
    res.status(200).json({
      success: true,
      count: donors.length,
      donors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching donors',
      error: error.message
    });
  }
};

// @desc    Get single donor
// @route   GET /api/donors/:id
// @access  Private
exports.getDonor = async (req, res) => {
  try {
    const donor = await User.findById(req.params.id).select('-password');
    
    if (!donor || donor.userType !== 'donor') {
      return res.status(404).json({
        success: false,
        message: 'Donor not found'
      });
    }
    
    res.status(200).json({ success: true, donor });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching donor',
      error: error.message
    });
  }
};

// @desc    Update donor availability
// @route   PUT /api/donors/availability
// @access  Private (Donor)
exports.updateAvailability = async (req, res) => {
  try {
    const { isAvailable } = req.body;
    
    const donor = await User.findByIdAndUpdate(
      req.user.id,
      { isAvailable },
      { new: true }
    ).select('-password');
    
    res.status(200).json({
      success: true,
      message: `Availability updated to ${isAvailable ? 'available' : 'unavailable'}`,
      donor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating availability',
      error: error.message
    });
  }
};

// @desc    Get donor's donation history
// @route   GET /api/donors/history/me
// @access  Private (Donor)
exports.getDonationHistory = async (req, res) => {
  try {
    const donations = await Donation.find({ donor: req.user.id })
      .populate('hospital', 'hospitalName phoneNumber')
      .sort('-donationDate');
    
    res.status(200).json({
      success: true,
      count: donations.length,
      donations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching donation history',
      error: error.message
    });
  }
};