var Kinect2 = require('kinect2'), express = require('express'), app = express(), server = require('http').createServer(app), io = require('socket.io').listen(server);

var kinect = new Kinect2();

console.log(process.cwd()+"\\hand.png");


if(kinect.open()) {
server.listen(8000);
console.log('Server listening on port 8000');
console.log('Point your browser to http://localhost:8000/menu.html');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/howto.html', function(req, res) {
    res.sendFile(__dirname + '/howto.html');
});

app.get('/menu.html', function(req, res) {
    res.sendFile(__dirname + '/menu.html');
});

app.get('/hand.png', function(req, res) {
    res.sendFile(__dirname + '/hand.png');
});

app.get('/lhand.png', function(req, res) {
    res.sendFile(__dirname + '/lhand.png');
});

app.get('/lgrip.png', function(req, res) {
    res.sendFile(__dirname + '/lgrip.png');
});

app.get('/rgrip.png', function(req, res) {
    res.sendFile(__dirname + '/rgrip.png');
});

kinect.on('bodyFrame', function(bodyFrame){
    io.sockets.emit('bodyFrame', bodyFrame);
});

kinect.openBodyReader();



}