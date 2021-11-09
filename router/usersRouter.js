const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = parseInt(size) || 10;

  const users = [...Array(limit)].map(() => {
    return {
      name: 'isabela',
    };
  });
  res.json(users);
});

module.exports = router;
