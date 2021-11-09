const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = parseInt(size) || 10;

  const products = [...Array(limit)].map(() => {
    return {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      img: faker.image.imageUrl(),
    };
  });

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('hello soy un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

module.exports = router;
