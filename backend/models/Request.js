const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Hospital ID is required']
  },
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: [true, 'Blood type is required']
  },
  unitsRequired: {
    type: Number,
    required: [true, 'Number of units required'],
    min: 1
  },
  urgencyLevel: {
    type: String,
    enum: ['critical', 'high', 'medium', 'low'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['active', 'fulfilled', 'cancelled', 'expired'],
    default: 'active'
  },
  patientCaseDetails: {
    type: String,
    required: [true, 'Patient case details are required']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  
  // Donor responses
  responses: [{
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['accepted', 'pending', 'declined'],
      default: 'pending'
    },
    respondedAt: {
      type: Date,
      default: Date.now
    },
    aiMatchScore: {
      type: Number,
      min: 0,
      max: 100
    },
    distance: Number // in km
  }],
  
  // Search radius
  searchRadius: {
    type: Number,
    default: 10 // km
  },
  
  // Fulfillment info
  fulfilledBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  fulfilledAt: Date,
  
  // Timing
  expiresAt: {
    type: Date,
    required: true
  },
  
  // AI Matching
  aiPriority: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  },
  
  // Notifications sent
  notificationsSent: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for geospatial queries
requestSchema.index({ location: '2dsphere' });
requestSchema.index({ status: 1, urgencyLevel: -1 });
requestSchema.index({ hospital: 1, createdAt: -1 });

// Set expiration time (24 hours from creation)
requestSchema.pre('save', function(next) {
  if (!this.expiresAt) {
    this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  }
  next();
});

// Calculate AI priority based on urgency and time
requestSchema.methods.calculateAIPriority = function() {
  const urgencyScores = {
    critical: 100,
    high: 75,
    medium: 50,
    low: 25
  };
  
  const baseScore = urgencyScores[this.urgencyLevel];
  const timeElapsed = Date.now() - this.createdAt;
  const hoursElapsed = timeElapsed / (1000 * 60 * 60);
  
  // Increase priority by 5 points per hour
  const timeBonus = Math.min(25, hoursElapsed * 5); // FIXED: Changed "nus" to "Bonus"
  
  this.aiPriority = Math.min(100, baseScore + timeBonus);
  return this.aiPriority;
};

// Get response statistics
requestSchema.methods.getResponseStats = function() {
  const accepted = this.responses.filter(r => r.status === 'accepted').length;
  const pending = this.responses.filter(r => r.status === 'pending').length;
  const declined = this.responses.filter(r => r.status === 'declined').length;
  
  return { accepted, pending, declined, total: this.responses.length };
};

module.exports = mongoose.model('Request', requestSchema);