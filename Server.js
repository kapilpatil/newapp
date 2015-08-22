/**
 * Created by kapil on 8/21/2015.
 */
/**
 * Created by kapil on 8/4/2015.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('hello');
    console.log("req port at 3000");
})
    .listen(3000);
console.log("server running");