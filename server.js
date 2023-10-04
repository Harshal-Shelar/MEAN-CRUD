const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const port = 3000;

var mongoDB = 'mongodb://127.0.0.1/userTest';
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, './public')));

require('./userModule/routes/user')(app, express.Router());

//Set up default mongoose connection
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port);