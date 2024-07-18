// productivity / backend / controllers / eventController.js

const Event = require('../models/Event');                       // Import the Event model to interact with the Event collection in the database.

const getEvents = async (req, res) => {                         // Define an asynchronous function called getEvents with request and response parameters.
    try {                                                       // Use a try-catch block to handle errors.
        const events = await Event.find();                      // Use the Event model to find all events in the database.
        res.json(events);                                       // Return the events as a JSON response.
    } catch (error) {                                           // Use a catch block to handle errors.
        res.status(500).json({ message: error.message });       // If an error occurs, return a 500 status code and an error message.
    }
}; 

const addEvent = async (req, res) => {                          // Define an asynchronous function called addEvent with request and response parameters.
    const {title, date, description} = req.body;                // Destructure the title, date, and description from the request body.
    try {                                                       // Use a try-catch block to handle errors.
        const event = new Event({title, date, description});    // Create a new event instance with the title, date, and description.
        await event.save();                                     // Save the event to the database.
        res.status(201).json(event);                            // Return a 201 status code and the event as a JSON response.
    } catch (error) {                                           // If an error occurs, catch the error.
        res.status(400).json({ message: error.message });       // If an error occurs, return a 500 status code and an error message.
    }
}; 

module.exports = { getEvents, addEvent };                       // Export the getEvents and addEvent functions to make them accessible in other files.