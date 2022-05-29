const express=require("express");
const app=express();
const port=process.env.PORT || 9091
const fs=require("fs/promises");
const os=require("os");

app.use(express.json());


app.get("/fetchdata",(req,res)=>{
  //  let data="Inital value";
  console.log("First one ---",+ new Date());
    fs.readFile("./files/userdata.txt",'utf-8').then(result=>{
        res.send(result);

    }).catch(err=>{
        console.log(err);
    })
        
})

    //console.log("Just befor response",+ new Date())

 
 




app.post("/savedata",(req,res)=>{

    const data=req.body.name+os.EOL;
    //console.log(data);

    fs.appendFile("./files/userdata.txt",data).then(result=>{

        res.json({
            message:"Data saved"
        })

    }).catch(err=>{
        console.log(err)
    })



 })


 function Appstart(){

    const promise=new Promise((res,rej)=>{
  
      app.listen(port,()=>{
  
      res("Server Started From promise")
  
   
  
  })
      
    })
  
  
    return promise
  
    
  }

  Appstart().then(data=>{
      console.log(data);
  })

  // Cone


  const fs = require('fs')

fs.readFile("a.txt", 'utf8', (err, data)=>{
if(err){
console.log(err)
}

else{

fs.writeFile("YourFIle.txt", data, (err, data)=>{
if(err){
console.log(err)}
else{
console.log("Code is successfully wirtten")
}
} )

}


             }) //This code is applicable for reading the file


///This code is applicable for writing in files

function check(number){

    return new Promise((res,rej)=>{
  
      if(number%2==0){
        res("number even")
      }
      else{
        rej("number odd");
      }
      
    })
    
  }
  
  check(23).then(data=>{
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })