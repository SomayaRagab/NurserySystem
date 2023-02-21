const express = require("express");
var morgan = require('morgan');
var cors  = require('cors');
const teacherRoute=require("./Routes/teacherRoute")
const childRoute=require("./Routes/childRoute")
const classRoute=require("./Routes/classRoute")



let server = express();
let port = process.env.PORT || 8080;

server.listen(port , ()=>{
    console.log("server is listening....")
})

server.use(cors ());

server.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));


server.use(express.json());
server.use(express.urlencoded({extended:false}));

//Routes  

server.use(classRoute);
server.use(childRoute);
server.use(teacherRoute);

// not found MW
server.use((request , response,next)=>{
    response.status(404).json({message:"Page not found"});
});

// error MW
server.use((error,request,response,next)=>{
    response.status(500).json({Error: error+""})
})