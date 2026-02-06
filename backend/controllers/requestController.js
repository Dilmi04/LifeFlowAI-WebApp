const Request = require('../models/Request');
const User = require('../models/User');

// @desc    Create new blood request
// @route   POST /api/requests
// @access  Private (Hospital)
exports.createRequest = async (req, res) => {
  try {
    const { bloodType, unitsRequired, urgencyLevel, patientDetails, location } = req.body;
    
    const request = await Request.create({
      hospital: req.user.id,
      bloodType,
      unitsRequired,
      urgencyLevel,
      patientDetails,
      location
    });
    
    const donors = await User.find({
      userType: 'donor',
      bloodType,
      isAvailable: true,
      isActive: true
    }).limit(50);
    
    request.donorsContacted = donors.map(donor => ({
      donor: donor._id,
      status: 'Pending'
    }));
    
    await request.save();
    await request.populate('hospital', 'hospitalName phoneNumber');
    
    res.status(201).json({
      success: true,
      message: 'Blood request created successfully',
      request,
      donorsContacted: donors.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating request',
      error: error.message
    });
  }
};

// @desc    Get all requests
// @route   GET /api/requests
// @access  Private
exports.getRequests = async (req, res) => {
  try {
    let query = {};
    
    if (req.user.userType === 'hospital') {
      query.hospital = req.user.id;
    } else if (req.user.userType === 'donor') {
      query.$or = [
        { 'donorsContacted.donor': req.user.id },
        { acceptedDonors: req.user.id }
      ];
    }
    
    if (req.query.status) query.status = req.query.status;
    
    const requests = await Request.find(query)
      .populate('hospital', 'hospitalName phoneNumber location')
      .populate('acceptedDonors', 'name bloodType phoneNumber')
      .sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: requests.length,
      requests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching requests',
      error: error.message
    });
  }
};

// @desc    Get single request
// @route   GET /api/requests/:id
// @access  Private
exports.getRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id)
      .populate('hospital', 'hospitalName phoneNumber address location')
      .populate('acceptedDonors', 'name bloodType phoneNumber')
      .populate('donorsContacted.donor', 'name bloodType phoneNumber');
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found'
      });
    }
    
    const stats = request.getResponseStats();
    
    res.status(200).json({
      success: true,
      request,
      stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching request',
      error: error.message
    });
  }
};

// @desc    Update request status
// @route   PUT /api/requests/:id/status
// @access  Private (Hospital)
exports.updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found'
      });
    }
    
    if (request.hospital.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this request'
      });
    }
    
    request.status = status;
    
    if (status === 'Fulfilled') request.fulfilledAt = Date.now();
    else if (status === 'Cancelled') request.cancelledAt = Date.now();
    
    await request.save();
    
    res.status(200).json({
      success: true,
      message: `Request status updated to ${status}`,
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating request status',
      error: error.message
    });
  }
};

// @desc    Respond to blood request
// @route   PUT /api/requests/:id/respond
// @access  Private (Donor)
exports.respondToRequest = async (req, res) => {
  try {
    const { response } = req.body;
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found'
      });
    }
    
    if (request.status !== 'Active') {
      return res.status(400).json({
        success: false,
        message: 'This request is no longer active'
      });
    }
    
    const donorContact = request.donorsContacted.find(
      contact => contact.donor.toString() === req.user.id
    );
    
    if (!donorContact) {
      return res.status(400).json({
        success: false,
        message: 'You were not contacted for this request'
      });
    }
    
    donorContact.status = response;
    donorContact.respondedAt = Date.now();
    
    if (response === 'Accepted') {
      if (!request.acceptedDonors.includes(req.user.id)) {
        request.acceptedDonors.push(req.user.id);
      }
    }
    
    await request.save();
    await request.populate('hospital', 'hospitalName phoneNumber');
    
    res.status(200).json({
      success: true,
      message: `Request ${response.toLowerCase()}`,
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error responding to request',
      error: error.message
    });
  }
};

// @desc    Get nearby donors for a request
// @route   GET /api/requests/:id/donors
// @access  Private (Hospital)
exports.getNearbyDonors = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found'
      });
    }
    
    if (request.hospital.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this request'
      });
    }
    
    const donors = await User.find({
      userType: 'donor',
      bloodType: request.bloodType,
      isAvailable: true,
      isActive: true
    }).select('-password');
    
    res.status(200).json({
      success: true,
      count: donors.length,
      donors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching nearby donors',
      error: error.message
    });
  }
};

// @desc    Cancel blood request
// @route   PUT /api/requests/:id/cancel
// @access  Private (Hospital)
exports.cancelRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found'
      });
    }
    
    if (request.hospital.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this request'
      });
    }
    
    request.status = 'Cancelled';
    request.cancelledAt = Date.now();
    await request.save();
    
    res.status(200).json({
      success: true,
      message: 'Request cancelled successfully',
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error cancelling request',
      error: error.message
    });
  }
};