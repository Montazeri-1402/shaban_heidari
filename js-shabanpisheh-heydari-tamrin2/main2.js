var http=require('http');

const port =8080;
http.createServer(function(req, res)
{
    hel.log('amir',req.headers.un);
    res.writeHead(200,{'Content-Type':'text/plain'});
    

}).listen(port);
console.log(`😒server listening on ${port}`);