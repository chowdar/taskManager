let http = require('http');
let express = require('./app');

let server = http.createServer(express);

let port = process.env.PORT || 3000;

server.listen(port, () => console.log(`sever is sucessfully running on port: ${port}`))