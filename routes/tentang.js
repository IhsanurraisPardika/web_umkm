const express = require('express');
const router = express.Router();
const tentangController = require('../controllers/tentangController');

router.get('/', tentangController.index);

module.exports = router;
