const express = require("express");
const app = express();

const path = require("path");
const cookiParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

// middlewares
app.set("view engine" , "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookiParser());


//routes
const userRoutes = require('./routes/userRoutes.js');
const profileRoutes = require('./routes/profileRoutes.js'); 


app.get("/" , (req,res)=>{
    res.render("index");
});

// creating account and login routes
app.use('/users', userRoutes); 

// profile access + CRUD
app.use('/profile', profileRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


