const express = require('express');
const db = require('../db');
const router = express.Router();

// GET alle Leads
router.get('/', async (req, res) => {
  try {
    const { status, minScore, limit = 50, offset = 0 } = req.query;
    let query = 'SELECT * FROM leads WHERE 1=1';
    const params = [];

    if (status) {
      query += ' AND status = $' + (params.length + 1);
      params.push(status);
    }

    if (minScore) {
      query += ' AND score >= $' + (params.length + 1);
      params.push(parseInt(minScore));
    }

    query += ' ORDER BY score DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(parseInt(limit), parseInt(offset));

    const result = await db.query(query, params);
    res.json({ leads: result.rows, total: result.rowCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
