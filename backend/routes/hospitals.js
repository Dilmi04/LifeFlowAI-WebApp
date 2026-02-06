const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getHospitals,
  getHospital,
  getHospitalStats
} = require('../controllers/hospitalController');

// All routes require authentication
router.use(protect);

// Get all hospitals
router.get('/', getHospitals);

// Get single hospital
router.get('/:id', getHospital);

// Get hospital statistics
router.get('/stats/me', authorize('hospital'), getHospitalStats);

module.exports = router;