var http=require('http');
var hel=require('./hel.js')
const port =8080;
http.createServer(function(req, res)
{
    hel.log('amir',req.headers.hell);
    res.writeHead(200,{'Content-Type':'text/plain'});

}).listen(port);
console.log(`😒server listening on ${port}`);