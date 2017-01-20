var concat = require('concat-stream');
var http = require('http');

function handleFullResponse(data) {
  console.log(data.length);
  console.log(data);
}

http.get(process.argv[2], function(resp) {
  resp.setEncoding('utf8');
  resp.pipe(concat(handleFullResponse));
  resp.on('error', console.error);
});
