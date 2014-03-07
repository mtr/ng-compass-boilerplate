var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//

var d = './build';
var p = './bin';

var env = p;




var file = new static.Server(env);

var port = 8181;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log('\n**************************************************\nServer running Framework at http://127.0.0.1:'+port+'/\n**************************************************\n');
