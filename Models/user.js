const mongoose = require('mongoose');


const Crud = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    phoneno : {
        type : Number,
        require : true,
        unique : true,
    },
    favouriteplace : {
        type : String,
        require : true,
    },

},{timestamps : true}
);

module.exports = mongoose.model('CRUD',Crud);