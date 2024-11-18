const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors=require('cors')
const mongoConnect = require('./db/connect');
const userRouters = require('./routes/userRouts');
const authRouts = require('./routes/authRout');
app.use(cors())

app.get('/test', (req, res) => {
    res.status(200).send("test successfull");
});

app.use(express.static('../e-commerce_web'));
app.use('/upload', express.static('./upload'));

mongoConnect();


app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // Parses application/json
app.use(bodyParser.urlencoded({ extended: true }));  // Parses application/x-www-form-urlencoded
app.use(express.json({ limit: "3000mb" }));

app.use(express.urlencoded({ extended: true }));
//userRoutes
app.use(userRouters);
app.use(authRouts);

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
})