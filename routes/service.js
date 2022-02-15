const express = require('express');
const router = express.Router();
const { User, Services, Orders } = require('../db/models');

/* GET service page. */
router.get('/:id', async function(req, res, next) {
  // const { id, price } = await Services.find
  const {id } = req.body;
  const {price} =  Services.findOne({where: {id: req.params.id}})
  console.log('PRICE ========>>', price);
  res.json(price);

});

module.exports = router;
