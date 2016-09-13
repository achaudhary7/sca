var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;


net.createServer(function(socket) {
    
   	// a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    socket.on('data', function(data) {
        
        console.log('DATA RECEIVED: ' + socket.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        socket.write('You said "' + data + '"');
        
    });
    
    // Add a 'close' event
    socket.on('close', function(data) {
        console.log('CLOSED');
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);