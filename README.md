# Output

Run server.js file as- 

~$ node server.js

Server listening on 127.0.0.1:6969
CONNECTED: 127.0.0.1:42478
DATA RECEIVED: 127.0.0.1: Hi
DATA RECEIVED: 127.0.0.1: Hi
DATA RECEIVED: 127.0.0.1: Hi
CLOSED

Run client.js as- 

~$ node node client.js -t 3000 -i 1000     //here -t is timeout in miliseconds and -i is interval in miliseconds 

prompt: message:  Hello       //Send data to server
CONNECTED TO: 127.0.0.1:6969
Remaining:2
Remaining:1
Remaining:0
Connection closed




