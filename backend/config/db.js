// productivity/ backend / config / db.js

const express = require('express');
const dotenv = require('dotenv'); 
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

dotenv.config(); 
connectDB();

const app = express(); 
app.use(express.json());

app.use('api/events', eventRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log(`Server running on port ${PORT}`)); 
