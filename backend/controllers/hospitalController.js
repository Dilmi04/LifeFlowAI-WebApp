const User = require('../models/User');
const Request = require('../models/Request');
const Donation = require('../models/Donation');

// @desc    Get all hospitals
// @route   GET /api/hospitals
// @access  Private
exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await User.find({ userType: 'hospital' })
      .select('-password')
      .sort('hospitalName');
    
    res.status(200).json({
      success: true,
      count: hospitals.length,
      hospitals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hospitals',
      error: error.message
    });
  }
};

// @desc    Get single hospital
// @route   GET /api/hospitals/:id
// @access  Private
exports.getHospital = async (req, res) => {
  try {
    const hospital = await User.findById(req.params.id).select('-password');
    
    if (!hospital || hospital.userType !== 'hospital') {
      return res.status(404).json({
        success: false,
        message: 'Hospital not found'
      });
    }
    
    res.status(200).json({ success: true, hospital });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hospital',
      error: error.message
    });
  }
};

// @desc    Get hospital statistics
// @route   GET /api/hospitals/stats/me
// @access  Private (Hospital)
exports.getHospitalStats = async (req, res) => {
  try {
    const totalRequests = await Request.countDocuments({ hospital: req.user.id });
    const activeRequests = await Request.countDocuments({ hospital: req.user.id, status: 'Active' });
    const fulfilledRequests = await Request.countDocuments({ hospital: req.user.id, status: 'Fulfilled' });
    const totalDonations = await Donation.countDocuments({ hospital: req.user.id });
    
    const successRate = totalRequests > 0 ? ((fulfilledRequests / totalRequests) * 100).toFixed(1) : 0;
    
    const recentRequests = await Request.find({ hospital: req.user.id })
      .sort('-createdAt')
      .limit(5)
      .populate('acceptedDonors', 'name bloodType phoneNumber');
    
    let avgResponseTime = 0;
    const requests = await Request.find({ hospital: req.user.id, status: 'Fulfilled' });
    
    if (requests.length > 0) {
      const totalResponseTime = requests.reduce((sum, req) => {
        if (req.fulfilledAt && req.createdAt) {
          return sum + (req.fulfilledAt - req.createdAt);
        }
        return sum;
      }, 0);
      avgResponseTime = Math.round(totalResponseTime / requests.length / 1000 / 60);
    }
    
    res.status(200).json({
      success: true,
      stats: {
        totalRequests,
        activeRequests,
        fulfilledRequests,
        totalDonations,
        successRate: `${successRate}%`,
        avgResponseTime: `${avgResponseTime} min`,
        recentRequests
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching hospital statistics',
      error: error.message
    });
  }
};