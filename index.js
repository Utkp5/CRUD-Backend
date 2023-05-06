const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const morgan = require('morgan');



app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(morgan("dev"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));



const dotenv = require('dotenv');
dotenv.config();


//db connection
const dbconnect = require('./service/dbConfig');;
dbconnect();


//router


app.get('/', (req,res) => {
    return res.status(200).send(`CRUD project`);
});








app.listen(PORT, function(err){
    if (err) {
        console.log(`err`);
    }

    console.log(`Server started successfully on PORT: ${PORT}!`);
}); 