// const express = require("express");
// const mongoose = require("mongoose");;
// const cors = require("cors");
// const app = express();



// const PORT = 5000;
// 

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("MongoDB is  connected successfully"))
//     .catch((err) => console.error(err));


// app.listen(PORT, () => {
//     console.log(`Auth System is running on port ${PORT}`);
// });

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.use('/api/auth', require('./routes/auth'));

// app.use(cors());
// app.use(express.json());


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const { MONGO_URL } = process.env
const connstr = MONGO_URL

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(connstr, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
  console.log(`auth system is running on port ${PORT}`);
});

//API Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);