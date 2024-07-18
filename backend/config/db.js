// productivity/ backend / config / db.js

const mongoose = require('mongoose');                                   // Import the mongoose module to interact with MongoDB. 

const connectDB = async () => {                                         // Define an asynchronous function called connectDB. 
    try {                                                               // use try-catch block to handle errors
        const conn = await mongoose.connect(process.env.MONGO_URI, {    // use mongoose.connect() to connect to the MongoDB database.
            useNewUrlParser: true,                                      // pass in the MongoDB URI from the .env file.
            useUnifiedTopology: true,                                   // pass in an object with the useNewUrlParser and useUnifiedTopology options set to true.
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);      // If the connection is successful, log a message to the console with the host of the connection.
    } catch (error) {                                                   // If an error occurs, catch the error and log an error message to the console.
        console.error(`Error: ${error.message}`);                       // Log the error message to the console.
        process.exit(1);                                                // Exit the process with an error code of 1.
    }
}; 

module.exports = connectDB;                                             // Export the connectDB function to make it accessible in other files.