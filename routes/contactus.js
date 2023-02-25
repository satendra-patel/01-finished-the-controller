const path = require('path');

const express = require('express');

const contactusController = require('../controllers/contactus');

const router = express.Router();


router.get('/contactus', contactusController.getInfo);

router.post('/contactus',contactusController.sendInfo);

module.exports = router;
