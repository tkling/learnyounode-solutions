'use strict'; 

const http = require('http');
const map = require('through2-map');

const server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(400, { 'content-type': 'text/plain' });
    return res.end('POST PLZ!\n')
  }

  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);
