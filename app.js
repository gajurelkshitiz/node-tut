var http = require('http');
var fs = require('fs');

http
    .createServer( (req, res) => {
        // const text = fs.readFileSync('./newfolder/bigfile.txt', 'utf8');
        // res.end(text);
        const filestream = fs.createReadStream('./newfolder/bigfile.txt', 'utf8');
        filestream.on('open', () => {
            filestream.pipe(res);
        })
        filestream.on('error', (err) => {
            console.log(err);
            res.end(err);
        })
    })
    .listen(5000);