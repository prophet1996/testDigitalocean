var http= require("http")
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hello World\n')
}).listen(8080,'10.17.0.6')
console.log("App running on the surever")
