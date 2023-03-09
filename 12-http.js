const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our page!');
    }
    if(req.url === '/about') {
        res.end('Here is our short history...')
    }
    res.end(`<h1>Ooops!</h1>
    <p>We cannot seem to find the page you are looking for!</p>
    <a href="/">Go back to the homepage</a>`);
});

server.listen(5000);