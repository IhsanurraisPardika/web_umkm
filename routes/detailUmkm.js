const express = require('express');
const router = express.Router();
const detailUmkmController = require('../controllers/detailUmkmController');

router.get('/:id', detailUmkmController.show);

module.exports = router;
