const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');

/* GET rooms page. */ 
router.get('/', controller.about);

module.exports = router;