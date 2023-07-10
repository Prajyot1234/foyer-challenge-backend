const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// Router Imports
const homeRoutes = require('./routers/home');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//creating app instance using express.
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//it will handle all cors errors
app.use(cors());

//using routes using router
app.use('/',homeRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT,() => { 
    console.log(`listening to the server on Port ${PORT}`);   
});
