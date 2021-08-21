require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');
const productRoute = require('./routes/productroutes');
const app = express();
const PORT = process.env.PORT ||5000;
const vendorRoute = require('./routes/vendorroute');
const bodyParser = require('body-parser');

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products',productRoute);
app.use('/vendors',vendorRoute);

app.listen(PORT,() =>console.log(`Server running on port${PORT}`));