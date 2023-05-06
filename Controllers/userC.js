const userModel = require('../Models/user');



const addController   = async(req,res) => {

    try {

        const {name,email,phoneno,favouriteplace} = req.body;

        if (!name || !email || !phoneno || !favouriteplace) {
            return res.status(400).send({message : `Something u are missing`});
        }
        if(phoneno.length > 10 || phoneno.length < 10){
            return res.status(400).send({message : `U have typed wrong number`});
        }
        if(!email.includes(`@`)){
            return res.status(400).send({message : `U have typed wrong email`});
        }

        const oldemail = await userModel.findOne({email});
        const oldphoneno  = await userModel.findOne({phoneno});

        if (oldemail || oldphoneno) {
            return res.status(400).send({message : `U are already in the Que `});            
        }

        const user = await new userModel({
            name,
            email,
            phoneno,
            favouriteplace,
        }).save();

            return res.status(200).send({message : `User added successfully`, user});            

        
    } catch (error) {
        console.log(error)
    }
}



const getallController  = async(req,res) => {

    try {
        
        const getall = await userModel.find({})

        if (!getall) {
            return res.status(400).send({message : `No User is there in your list `});                        
        }

        return res.status(200).send(getall);
        
        

    } catch (error) {
        console.log(error)
    }
}



const getSingleController  = async(req,res) => {

    try {

        const _id = req.params._id;
        console.log(_id);

        const getsingle = await userModel.findById(_id);

        if (!getsingle) {
            return res.status(400).send({message : `No User is there in your list `});                        
        }

        return res.status(200).send(getsingle);
        
    } catch (error) {
        console.log(error)
    }
}


const updateController  = async(req,res) => {


    try {

        const id = req.params.id;

        const getsingleupdate = await userModel.findById(id)

        if (!getsingleupdate) {
            return res.status(400).send({message : `No User is there in your list `});                        
        }

        const User = {
            name : req.body.name,
            email : req.body.email,
            phoneno : req.body.phoneno,
            favouriteplace : req.body.favouriteplace,
        }

        const final = await userModel.findByIdAndUpdate(id, User, {new:true}); 

        return res.status(200).send({message : `User updated successfully`, final});

        
    } catch (error) {
        console.log(error)
    }
}


const deleteController  = async(req,res) => {


    try {

        const id = req.params._id;

        const del = await userModel.findById(id)

        if (!del) {
            return res.status(400).send({message : `No User is there in your list `});                        
        }

        
        const final = await userModel.findByIdAndDelete(id); 

        return res.status(200).send({message : `User Deleted successfully`});

        
    } catch (error) {
        console.log(error)
    }
}



module.exports = {addController, getallController, getSingleController , updateController, deleteController};