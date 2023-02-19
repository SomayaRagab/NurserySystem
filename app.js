const express = require("express");
var morgan = require('morgan');
var cors  = require('cors');
let server = express();
let port = process.env.PORT || 8080;

server.listen(port , ()=>{
    console.log("server is listening....")
})

server.use(cors ({
    origin: 'http://127.0.0.1:5500'
}));

server.use(morgan( (tokens, req, res)=> {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
    //    return `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)} ${tokens.res(req, res, 'content-length')} - ${tokens['response-time'](req, res)} ms`
  }))


// not found MW
server.use((request , response,next)=>{
    response.status(404).json({message:"Page not found"});
});

// error MW
server.use((error,request,response,next)=>{
    response.status(500).json({Error: error+""})
})