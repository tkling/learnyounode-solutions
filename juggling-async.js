'use strict';

const http = require('http');
const concatStream = require('concat-stream');

let completedCallbacks = 0;
const responseData = [];

function handleResponse(given_index, response) {
  response.setEncoding('utf8');
  response.on('error', console.error);
  response.pipe(concatStream(function(data) {
    completedCallbacks++;
    responseData[given_index-2] = data;
    if (completedCallbacks === 3) { console.log(responseData.join("\n")); }
  }));
}

[2, 3, 4].forEach(function(url_idx) {
  http.get(process.argv[url_idx], function(resp) {
    handleResponse(url_idx, resp);
  });
});
