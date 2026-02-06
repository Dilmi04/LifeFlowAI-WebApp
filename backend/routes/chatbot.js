const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Simple keyword matching (like current frontend)
    const response = getBotResponse(message.toLowerCase());
    
    res.json({
      success: true,
      response: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Chatbot error'
    });
  }
});

function getBotResponse(input) {
  // Same logic as frontend getBotResponse()
  const responses = {
    'find blood donors': 'I can help you find blood donors...',
    'eligibility': 'To donate blood, you must be...',
    // ... etc
  };
  
  for (const [key, response] of Object.entries(responses)) {
    if (input.includes(key)) {
      return response;
    }
  }
  
  return 'I\'m here to help with blood donation queries!';
}

module.exports = router;