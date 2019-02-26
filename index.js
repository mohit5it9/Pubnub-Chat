var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var pubnub = require("chat-engine");
var typing = require('chat-engine-typing-indicator');

app.use(express.static(__dirname + '/public'));


var connectedUsers = 0;

io.on('connection', function(socket){
	connectedUsers++;
	io.emit('chat connections',connectedUsers);
	socket.on('disconnect',function(){
		connectedUsers--;
		io.emit('chat connections',connectedUsers);
	});
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on * : 3000');
});
