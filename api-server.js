var http = require('http');
var url = require('url');

var routemap = {
  '/api/parsetime': parsetime,
  '/api/unixtime': unixtime
};

function parsetime(timestring) {
  var date = new Date(timestring);
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

var server = http.createServer(function(req, res) {
  var reqInfo = url.parse(req.url, true);
  var endpoint = routemap[reqInfo.pathname.toLowerCase()];

  if (endpoint) {
    var iso = reqInfo.query.iso;
    if (iso) {
      return writeResponse(res, endpoint(iso), 200);
    } else {
      return writeResponse(res, 'Missing iso query string param\n', 400);
    }
  } else {
    var body = JSON.stringify({ 'error': 'endpoint not recognized' });
    return writeResponse(res, body, 404);
  }
});

server.listen(Number(process.argv[2]));
