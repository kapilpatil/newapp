/**
 * Created by kapil on 8/25/2015.
 */
var http = require('http');
var link = require('./link');

http.createServer(function(req,res){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('hello');

}).listen(3000);
link.info("answer");