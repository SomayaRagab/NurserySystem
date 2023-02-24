const express = require("express");
var morgan = require('morgan');
var cors  = require('cors');
var mongoose = require("mongoose")
const teacherRoute=require("./Routes/teacherRoute")
const childRoute=require("./Routes/childRoute")
const classRoute=require("./Routes/classRoute")



/**************server */
let server = express();
let port = process.env.PORT || 8080;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/NurserySystem")
        .then(()=>{
          console.log("connect DB")
          server.listen(port , ()=>{
            console.log("server is listening....")
        })
        }).catch(error => console.log("DB problem " + error))


/****************************/


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


server.use(childRoute);
server.use(teacherRoute);
server.use(classRoute);

// not found MW
server.use((request , response,next)=>{
    response.status(404).json({message:"Page not found"});
});

// error MW
server.use((error,request,response,next)=>{
  let status=error.status||500;
  response.status(status).json({message:error+""});
})