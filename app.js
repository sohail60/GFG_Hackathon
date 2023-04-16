const express= require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
// const bodyParser=require('body-parser');
const app=express();

dotenv.config({path: './config.env'})

require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'))


// Listening
const PORT=process.env.PORT;
app.listen(3000,(err) => {
    console.log('Listening at port 3000');
})