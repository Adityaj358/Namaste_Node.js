 const http = require("http");
const { url } = require("inspector");

 const server = http.createServer(function(req,res){

    if(req.url === "/secretdata"){
        res.end("Hey There is no any secret data")
    }
    res.end("Hello Aditya");
 })

server.listen(2000);