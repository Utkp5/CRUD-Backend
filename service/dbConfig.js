const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = async() => {

    try {

        await mongoose.connect(process.env.MONGODB);
        console.log(`Mongodb connected successfully`);
        
    } catch (error) {
        
    }
}


module.exports = dbconnect;