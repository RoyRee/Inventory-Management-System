const mongoose = require('mongoose');


const vendorSchema = new mongoose.Schema({
    vendor_name: {
        type: String,
        required: true
    },
    vendor_phone:{
        type: Number,
        required: true
    },
    vendor_acno: {
        type: Number,
        required: true
    },
    vendor_ifsc: {
        type: String,
        required: true
    },
    vendor_bank: {
        type: String,
        required: true
    },
    vendor_branch:{
        type: String,
        required: true
    },
    vendor_actype:{
        type: String,
        required: true
    }

});

const Vendor = mongoose.model('vendor',vendorSchema,'vendors_data');

module.exports = Vendor;
