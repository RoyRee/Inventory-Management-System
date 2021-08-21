const express = require('express');
const router = express.Router();

const {addVendor} = require('../controller/vendorController');

router.post('/addvendor',addVendor);


module.exports = router;
