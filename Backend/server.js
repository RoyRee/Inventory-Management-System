require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoute = require('./routes/productroutes');
const app = express();
const PORT = process.env.PORT ||5000;
const vendorRoute = require('./routes/vendorroute');

connectDB();

app.use('/products',productRoute);
app.use('/vendors',vendorRoute);

app.listen(PORT,() =>console.log(`Server running on port${PORT}`));