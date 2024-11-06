const express = require('express')
const app = express()
const {db}= require('./db');
require('dotenv').config() //load all key-value pairs in .env file to proces.env object

let cookieParser = require('cookie-parser'); 
app.use(cookieParser()); 

const bodyParser = require('body-parser')
const port = process.env.PORT

app.use(bodyParser.json())
app.use(express.json())

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.use('/',(req,res)=>{
    console.log(req.cookies)
    res.send("Welcome to Voting app . This is home route")
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})