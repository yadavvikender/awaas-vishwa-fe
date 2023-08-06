require('dotenv').config()
const express=require('express');
const mongoose = require('mongoose');
const healthRoute= require('./routes/HealthRoute')

/**
 * App
 */
const app= express();
app.use(express.json());


/**
 * Database Connection
 */
//mongodb+srv://<username>:<password>@cluster0.j0xjnqt.mongodb.net/
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.once('connected',()=> console.log('Database Connected'));
mongoose.connection.on('error',(er)=> console.log('Database error :',er));


/**
 * Routes
 */

app.use('/health',healthRoute)
app.listen(process.env.SERVER_PORT,()=> console.log('App server started at PORT 3000'));
 