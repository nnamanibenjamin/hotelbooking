const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

//load env files
dotenv.config({ path: './config/config.env' });


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dev loggin middle
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
