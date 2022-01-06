
const express = require("express");
const path = require('path')

const app = express();
const port = 4000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname+"/index.html", function(err, data){
    if(err){
      res.send("Error");
    } else{
      console.log("Complete");
    }
  });
});

app.get("/signin", function(req, res){
  res.sendFile(__dirname+"/signin.html");
  app.post('/',function(request, response){

  });
});

app.get("/signup", function(req, res){
  res.sendFile(__dirname+"/signup.html");
  app.post("/signin", function(request, response){

  });
})


app.listen(port, function(){
  console.log("Server is running on port 4000");
});
