// Express is a web framework for node js ---
// That helps us reduce the complexity of api creation
// it provides better apporach and better utility which was not offered
// by node js http module 

// web applocation server

// we dnt need to use node js http module anymore
//const dotenv=require("dotenv");
//dotenv.config();  // this config methods loads the env file for you
require("dotenv").config()  //
const express=require("express");  // It loads the express package and assigns it to the express variable
const port =process.env.PORT || 9091
const cors=require("cors");
//the above express variable is a function actually 
// 1-65356


const app=express() ; // calling express function returns us with the app object which we use to create server and routes

app.use(cors())

// Root route (/)


// Route handler
app.get("/",(req,res,next)=>{
   // res.send("hello world");// this will send the response to the user
//res.write("hello there");

//res.end()

   res.send("Hey there I am from express !!") //--> res.write() + res.end() from http module node js

})

app.get("/user",(req,res,next)=>{
    // res.send("hello world");// this will send the response to the user
 //res.write("hello there");
 
 console.log(req.query);
 //res.end()
 
    res.send("Hey there I am from User route !!") //--> res.write() + res.end() from http module node js
 
 })
 
 // The post route 

 app.post("/savedata",(req,res)=>{
   // Are already provided to us by express 
   // for getting the data 
   // console.log(req.body);
    //console.log(req.query);
    //console.log(req.params);
    // cosnole.log(req.headers);

     ///


     // res.send can send anytype of data -json ,html ,text
    // res.send({
        // name:"Hello"
    // });
    // you can only send json
     res.json({
         name:"hey there"
     })

     // res.send()
     // res.json({}) // especially for json data
     //res.render() // for template engines
     // res.sendFile()  // for sending html files
     // res.redirect("") // for redirecting to another routes
 })


// If you want to start the web application server 

app.listen(port,()=>{
    console.log(`Server Running At port ${port}`)
})

