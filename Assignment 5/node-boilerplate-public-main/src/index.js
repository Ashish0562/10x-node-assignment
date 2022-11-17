var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if (req.url=='/welcome') {
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('Welcome to Dominos!')
  }else if (req.url=='/contact') {
    res.writeHead(200,{'content-type': 'application/json'});
    res.write(JSON.stringify({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com'
    }))
    res.end();
  }else{
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("PAGE NOT FOUND");
    res.end();
  }
}

httpServer.listen(8081)
module.exports = httpServer;