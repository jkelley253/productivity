// productivity/ backend / config / db.js

const express = require('express');                                 // Import the express module
const dotenv = require('dotenv');                                   // Import the dotenv module,loads environment variables from a .env file into process.env.
const connectDB = require('./config/db');                           // Import the connectDB function from the db.js file in the config directory. 
const eventRoutes = require('./routes/eventRoutes');                // Import the eventRoutes module from the eventRoutes.js file in the routes directory. This module contains the routes for handling event-related requests.

dotenv.config();                                                    // load env variables from .env file 
connectDB();                                                        // connectDB function called to connect to DB 

const app = express();                                              // create express instance 
app.use(express.json());                                            // use express.json

app.use('api/events', eventRoutes);                                 // mount eventRoutes module so any requests will be handled by the routes in file 

const PORT = process.env.PORT || 5000;                              // define port number 
app.listen(PORT, console.log(`Server running on port ${PORT}`));    // start server  
