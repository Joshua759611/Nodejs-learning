const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
 //res.end('Swahilipot Hub');

  if(req,res === '/'){
    res.end('Welcome To Our Community Page')
  }
 if(req,res ==='/about'){
     res.end("Here is our short history")
 }
 res.end(`
 <h1>Ooops!!</h1>
 <p>We can't seem to find the page you are looking for</p>
 <a href="/">Back Home</a>
 `)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});