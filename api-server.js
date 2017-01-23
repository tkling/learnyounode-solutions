'use strict';

const http = require('http');
const url = require('url');

const routemap = {
  '/api/parsetime': parsetime,
  '/api/unixtime': unixtime
};

function parsetime(timestring) {
  const date = new Date(timestring);
  return JSON.stringify({
    'hour'  : date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  });
}

function unixtime(timestring) {
  return JSON.stringify({ 'unixtime': new Date(timestring).getTime() });
}

function writeResponse(response, body, statusCode) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json' });
  response.end(body);
}

const server = http.createServer(function(req, res) {
  const reqInfo = url.parse(req.url, true);
  const endpoint = routemap[reqInfo.pathname.toLowerCase()];

  if (endpoint) {
    const isotime = reqInfo.query.iso;
    if (isotime) {
      return writeResponse(res, endpoint(isotime), 200);
    } else {
      return writeResponse(res, 'Missing iso query param\n', 400);
    }
  } else {
    let body = JSON.stringify({ 'error': 'endpoint not recognized' });
    return writeResponse(res, body, 404);
  }
});

server.listen(Number(process.argv[2]));
