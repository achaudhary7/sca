var net = require('net');  
var HOST = '127.0.0.1';   //Created TCP connection with .net libraries, port & IP
var PORT = 6969;


var argv = require('yargs').argv;   //Parse command line arguments 
var timeout = argv.t;
var interval = argv.i;


x = timeout / 1000;       // Convert milisecond into seconds 
stimeout = x % 60;
y = interval / 1000;
sinterval = y % 60;

var prompt = require('prompt');   //Prompt for user to get the message 
getmessage();

var client = new net.Socket();   //Create Socket
 function getmessage()
 {
 				prompt.start();
				prompt.get(['message'], function (err, result) {  //Prompt Uer for message
		    		connectClient(result.message);  //Call connect funtion 
		    	
  });				
 } 

function connectClient(message) {
client.connect(PORT, HOST, function(err) {    
  	console.log('CONNECTED TO: ' + HOST + ':' + PORT);  
    	setInterval(sendData, interval, message);   // Set Interval here
}); }

function sendData(message)
{
		if(stimeout>=sinterval)   //Check for timeout 
    	{
				client.write(message);  //Write prompt message 
				stimeout--; 	
				console.log('Remaining:' +stimeout);
    	}
    	else
    	{
    		client.destroy();  
    	}
}
client.on('close', function() {
    console.log('Connection closed');  //Close connection

});

