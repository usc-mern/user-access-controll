const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

//routes
const userRoute = require('./routes/api/v1/user.route');
const pageAccessRoute = require('./routes/api/v1/page.access.route');

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

// posting to database

app.use('/api/v1/user', userRoute);
app.use('/api/v1/page-access', pageAccessRoute);


module.exports = app; 