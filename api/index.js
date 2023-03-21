'use strict';

//load env files
import dotenv from 'dotenv';
dotenv.config()

import express, {json, urlencoded} from 'express';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
const  {connect, set, on, connection} = mongoose;

import console from 'console'
const { log, error } = console

//bind with express server
const app = express();


//import routes
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'




// middlewares

app.use(cookieParser())
app.use(morgan('common'));
app.use(json());
app.use(urlencoded({ extended: false }));


app.use(cors({
    'origin': '*',
    'methods': ['POST', 'PUT', 'PATCH', 'POST', 'GET', 'DELETE'],
    'allowedHeaders': ['Content-Type', 'Authorization']
}))


//connection to mongodB

set('strictQuery', true)

const db_url =  process.env.DB_URL


connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> log('DB connection successful'))
.catch((error)=> log(error.message))

connection.on('Disconnected', ()=> {
    error(error.message)
})

//routes use here


app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errMessage = err.message || "Something went wrong"

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errMessage,
        stack: err.stack
    })
})


//connection to port
const PORT = process.env.PORT 

const server = app.listen(PORT, log(`Server active at port ${PORT}`))
