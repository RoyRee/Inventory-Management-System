const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required:true
    },
    product_catid : {
        type: String,
        required: true
    },
    models: [{
        sku: String,
        quantity: Number,
        price: Number,
        features: 
            {
                reed_orientation: String,
                reed_brand: String,
                keys: Number,
                make: String,
                folding: String,
                body: String,
                cover: String,
                board: String,
                line : Number
            }
        
    }]
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;