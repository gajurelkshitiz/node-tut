const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page</h1>');
    } 
    if (req.url === '/about') {
        for (let i = 0; i < 10000; i++) { 
                console.log('Simulating a blocking operation...');
        } // Simulate a blocking operation
        
        res.end('<h1>Here is our short history</h1>');
    } 
    else {
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});