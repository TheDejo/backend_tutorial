const http = require ('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Welcome to our home page')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Error 404</p>
    <a href="/">go to home</a>
  `)
})

server.listen(5000)