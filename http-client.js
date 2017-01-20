var http = require('http')

var destination = process.argv[2]

http.get(destination, function(resp) {
  resp.setEncoding('utf8')
  resp.on('error', console.error) 
  resp.on('data', console.log) 
}).on('error', console.error)
