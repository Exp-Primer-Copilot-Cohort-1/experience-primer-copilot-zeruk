// Create web server
var http = require('http');
var fs = require('fs');


// create server
http.createServer(function(req, res) {
    // read file
    fs.readFile('comments.html', function(err, data) {
        // write head
        res.writeHead(200, {'Content-Type': 'text/html'});
        // write data
        res.write(data);
        // end
        res.end();
    });
}).listen(8080);
console.log(`Server is running at http://localhost:8080/`);
