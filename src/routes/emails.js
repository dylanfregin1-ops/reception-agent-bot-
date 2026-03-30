const express = require('express');
const router = express.Router();

router.get('/campaigns', async (req, res) => {
  res.json([]);
});

module.exports = router;
