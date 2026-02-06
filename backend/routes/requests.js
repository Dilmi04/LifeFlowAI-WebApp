const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createRequest,
  getRequests,
  getRequest,
  updateRequestStatus,
  respondToRequest,
  getNearbyDonors,
  cancelRequest
} = require('../controllers/requestController');

// All routes require authentication
router.use(protect);

// Create new blood request (hospitals only)
router.post('/', authorize('hospital'), createRequest);

// Get all requests
router.get('/', getRequests);

// Get single request
router.get('/:id', getRequest);

// Update request status
router.put('/:id/status', authorize('hospital'), updateRequestStatus);

// Respond to request (donors only)
router.put('/:id/respond', authorize('donor'), respondToRequest);

// Get nearby donors for a request
router.get('/:id/donors', authorize('hospital'), getNearbyDonors);

// Cancel request
router.put('/:id/cancel', authorize('hospital'), cancelRequest);

module.exports = router;