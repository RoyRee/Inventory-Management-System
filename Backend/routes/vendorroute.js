const express = require('express');
const router = express.Router();

const {addVendor} = require('../controller/vendorController');

router.get('/addvendor',addVendor);


module.exports = router;
