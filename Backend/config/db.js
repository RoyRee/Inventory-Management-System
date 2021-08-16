require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology : true
        });
        console.log("MongoDB connection Successful")
    }catch(error){
        console.error("MongoDB connection Fail");
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;