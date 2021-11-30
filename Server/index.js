const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require ('body-parser');
const app = express();
const routes = require('./routes/activityRoutes');
const authRoutes = require("./routes/authRoutes");
app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded( {extended: true}));
app.use("/", routes);
app.use("/", authRoutes);
const PORT= 8001;
const URL = 'mongodb+srv://amnaIshaq:462524@m002.scfzi.mongodb.net/Exercise_Tracker?retryWrites=true&w=majority';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}). then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server is running at port ${PORT}`)
    })
}).catch(error => {
    console.log('Error: ', error.message);
})
