const express = require('express');
const router = express.Router();

router.get('/logs', async (req, res) => {
  res.json([]);
});

module.exports = router;
