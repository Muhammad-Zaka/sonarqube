var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('SonarQube Working with Gitlab Actions and deploying code\n');
});

server.listen(8081);
