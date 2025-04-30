const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page</h1>');
        return;
    }
    if (req.url === '/about') {
        res.end('<h1> About us</h1>');
        return;
    }
    res.end('<h1>Oops! Page Not found</h1>' +
        '<p> Go back to <a href="/">home</a> </p>');    
});

server.listen(5000);