var express = require('express');

// we need router package enable routing for the students
var router = express.Router();



//instead of using app, here we'll use router for the separte routes


//to check the logged date 
router.use('/get-students', (req,res,next)=> {
    /*setting header
    req.headers["content-type"]='application/json'; */

    console.log("API CALL RECEIVED");
    next();
    });


// /stud/get-students
router.get('/get-students', (req,res)=>{
 //   res.send("Headers received"+ req.headers["content-type"]);
    res.send("GET request for students")
})

//dynamic routes with passing parameters
router.get('/get-students/:id', (req,res)=>{
    res.send("GET request for students with id" + req.params.id)
})

//for numerical -> id
router.get('/search/:key([0-9]{4})', (req,res)=>{
    res.send("Data captured is " + req.params.key)
})


// for string -> username
router.get('/search/:username([a-zA-Z]{10})', (req,res)=>{
    res.send("Name captured is " + req.params.username)
})

// wild card routes
router.get('*', (req,res)=>{
    res.send("URL not found ");
})






module.exports = router;