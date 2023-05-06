const express = require('express');
const { addController, getallController, getSingleController, updateController, deleteController } = require('../Controllers/userC');
const router = express.Router();

//add
router.post('/add', addController);

//get
router.get('/get-all', getallController);

//get-single
router.get('/get-single/:_id', getSingleController);

//update
router.put('/update/:id', updateController);

//delete
router.delete('/delete/:_id', deleteController);


module.exports = router;