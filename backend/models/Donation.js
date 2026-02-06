const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Donor ID is required']
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Hospital ID is required']
  },
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request'
  },
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: [true, 'Blood type is required']
  },
  unitsCollected: {
    type: Number,
    required: [true, 'Number of units is required'],
    min: 1
  },
  donationDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  
  // Medical screening
  screening: {
    hemoglobin: Number,
    bloodPressure: {
      systolic: Number,
      diastolic: Number
    },
    weight: Number,
    temperature: Number,
    passedScreening: {
      type: Boolean,
      default: true
    },
    notes: String
  },
  
  // Donation details
  donationType: {
    type: String,
    enum: ['whole-blood', 'plasma', 'platelets', 'double-red'],
    default: 'whole-blood'
  },
  collectionMethod: {
    type: String,
    enum: ['standard', 'apheresis'],
    default: 'standard'
  },
  
  // Impact tracking
  livesSaved: {
    type: Number,
    default: 1
  },
  
  // Location
  donationLocation: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  
  // Feedback
  donorFeedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    submittedAt: Date
  },
  
  // Next eligible date (auto-calculated)
  nextEligibleDate: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
donationSchema.index({ donor: 1, donationDate: -1 });
donationSchema.index({ hospital: 1, donationDate: -1 });
donationSchema.index({ status: 1 });

// Calculate next eligible donation date (56 days after donation)
donationSchema.pre('save', function(next) {
  if (this.donationDate && !this.nextEligibleDate) {
    const nextDate = new Date(this.donationDate);
    nextDate.setDate(nextDate.getDate() + 56); // 56 days = 8 weeks
    this.nextEligibleDate = nextDate;
  }
  next();
});

// Update donor's last donation date and next eligible date
donationSchema.post('save', async function() {
  if (this.status === 'completed') {
    const User = mongoose.model('User');
    await User.findByIdAndUpdate(this.donor, {
      lastDonationDate: this.donationDate,
      nextEligibleDate: this.nextEligibleDate,
      $inc: { totalDonations: 1, livesSaved: this.livesSaved }
    });
  }
});

module.exports = mongoose.model('Donation', donationSchema);