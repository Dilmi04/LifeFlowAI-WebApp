const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  userType: {
    type: String,
    enum: ['donor', 'hospital'],
    required: [true, 'Please specify user type']
  },
  
  // Donor-specific fields
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a phone number']
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  location: {
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
  
  // Donor availability
  isAvailable: {
    type: Boolean,
    default: true
  },
  lastDonationDate: {
    type: Date
  },
  nextEligibleDate: {
    type: Date
  },
  
  // Hospital-specific fields (NO required validation here)
  hospitalName: {
    type: String
  },
  hospitalType: {
    type: String,
    enum: ['government', 'private', 'speciality', '']
  },
  licenseNumber: {
    type: String
  },
  
  // Common fields
  profileImage: {
    type: String,
    default: 'default-avatar.png'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  
  // Notification preferences
  notificationPreferences: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: true },
    push: { type: Boolean, default: true },
    emergencyAlerts: { type: Boolean, default: true }
  },
  
  // Stats
  totalDonations: {
    type: Number,
    default: 0
  },
  livesSaved: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for geospatial queries
userSchema.index({ location: '2dsphere' });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Calculate next eligible donation date (56 days after last donation)
userSchema.methods.calculateNextEligibleDate = function() {
  if (this.lastDonationDate) {
    const nextDate = new Date(this.lastDonationDate);
    nextDate.setDate(nextDate.getDate() + 56);
    this.nextEligibleDate = nextDate;
  }
};

module.exports = mongoose.model('User', userSchema);