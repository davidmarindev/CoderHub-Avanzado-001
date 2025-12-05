const express = require('express');
const router = express.Router();

// Example webhook endpoint
router.post('/webhook', (req, res) => {
    const data = req.body;
    // Process the incoming webhook data as needed
    console.log('Received webhook data:', data);
    
    // Respond to the webhook request
    res.status(200).send('Webhook received');
});

module.exports = router;