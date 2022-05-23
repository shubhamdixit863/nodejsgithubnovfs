require("dotenv").config();
const http=require("http");  // its a common js import of http module
const fs=require("fs");
const port=process.env.PORT || 9000;



function requsetListner(req,res){
    console.log(req.method);
    if(req.method=="GET" && req.url=="/"){
        res.write("<h1>HEllo Root</h1>")  // this sends an resposne an html
        res.end();  // this stops the response stream

    }

   else if(req.method=="GET" && req.url=="/user"){
        res.write("<h1>HEllo USer</h1>")
        res.end(); 
   }

   else if(req.method=="GET" && req.url=="/html"){

    fs.readFile("./inde.html",'utf-8',(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});// adding the status code 200 and the content type as text/html
            res.write("Not found")
    
            res.end();   

        }
        else{

            res.writeHead(200,{'Content-Type':'text/html'});// adding the status code 200 and the content type as text/html
            res.write(data)
    
            res.end();   // its is used to end up the response cycle
        }


       


    })
 
   
}



        else if(req.method=="POST" && req.url=="/user"){
            res.write("<h1>HEllo USer</h1>")
            res.end(); 
    
        }    
    
    }








const server=http.createServer(requsetListner);  // Request listsner would be passed


server.listen(port,function(){
    console.log("Server started")
});