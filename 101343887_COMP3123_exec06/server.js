const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notesRoute = require('./routes/NoteRoutes')

const DB_URL = "mongodb+srv://yaroslav9728:Mikki200909+@cluster0.elr77qb.mongodb.net/mongodbsample?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
mongoose.Promise = global.Promise;

app.use(notesRoute)

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});