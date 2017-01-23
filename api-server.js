'use strict';

const http = require('http');
const url = require('url');

const routemap = {
  '/api/parsetime': parsetime,
  '/api/unixtime': unixtime
};

function parsetime(timestring) {
  const date = new Date(timestring);
  return {
    'hour'  : date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
  };
}

function unixtime(timestring) {
  return { 'unixtime': new Date(timestring).getTime() };
}

function writeResponse(response, body, statusCode) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(body));
}

const server = http.createServer(function(req, res) {
  const reqInfo = url.parse(req.url, true);
  const endpoint = routemap[reqInfo.pathname.toLowerCase()];

  if (endpoint) {
    const isotime = reqInfo.query.iso;
    if (isotime) {
      return writeResponse(res, endpoint(isotime), 200);
    } else {
      return writeResponse(res, { 'error': 'missing iso query param' }, 400);
    }
  } else {
    return writeResponse(res, { 'error': 'endpoint not recognized' }, 404);
  }
});

server.listen(Number(process.argv[2]));
