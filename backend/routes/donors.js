const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getDonors,
  getDonor,
  updateAvailability,
  getDonationHistory
} = require('../controllers/donorController');

// All routes require authentication
router.use(protect);

// Get all donors (for hospitals)
router.get('/', authorize('hospital'), getDonors);

// Get single donor
router.get('/:id', getDonor);

// Update donor availability
router.put('/availability', authorize('donor'), updateAvailability);

// Get donation history
router.get('/history/me', authorize('donor'), getDonationHistory);

module.exports = router;