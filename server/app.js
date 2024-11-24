const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const mongoConnect = require('./db/connect');
const userRouters = require('./routes/userRouts');
// const authRouts = require('./routes/authRout');
const path = require('path');


app.use(cors());

// Fix the static path
app.use(express.static(path.join(__dirname, '../e-commerce_web')));
app.use('/upload', express.static('./upload'));

mongoConnect();

// Built-in middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(userRouters);
// app.use(authRouts);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
