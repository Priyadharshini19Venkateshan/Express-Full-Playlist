//importing the express js module into our application
var express = require('express');

//importing the student.js into main file
var student = require('./routes/student');


//importing moongose js module to connect with mongo db
var mongoose = require('mongoose');
//import the property file and extract url of db
var dbURL = require("./prpoerties").DB_URL;
mongoose.connect(dbURL);
mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongo Db using MongooseJs");
})










 



//we're intializing the app using the express
var app = express();

// telling the main file to use router header stud when the student js is called
app.use('/stud', student);




//using the app we're configuring the route of "GET" and path is "/"
//whenever request for this endpoint '/' -> the response will be HELLO WORLD

app.get('/',(req,res)=>{
res.send("hello world!");
});

app.get('/json',(req,res)=>{

    var info = {
        id: 1,
        name:"Priya",
        course:"Express"
    }
    res.send(info);
    });

//we're starting the app at port 3000
// it will internally start http.createServer and starts to listen to the port
app.listen(3000);