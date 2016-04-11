var Kinect2 = require('kinect2'), express = require('express'), app = express(), server = require('http').createServer(app), io = require('socket.io').listen(server);

var kinect = new Kinect2();

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
    res.sendFile(__dirname + '/mainmenu.html');
});

app.get('/hand.png', function(req, res) {
    res.sendFile(__dirname + '/hand.png');
});

app.get('/lassoIcon.png', function(req, res) {
    res.sendFile(__dirname + '/lassoIcon.png');
});


app.get('/rlassoIcon.png', function(req, res) {
    res.sendFile(__dirname + '/rlassoIcon.png');
});


app.get('/parabola.js', function(req, res) {
    res.sendFile(__dirname + '/parabola.js');
});

app.get('/line.js', function(req, res) {
    res.sendFile(__dirname + '/line.js');
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
//
app.get('/ButtonIcons/conicButton.jpg', function(req, res) {
    res.sendFile(__dirname + '/conicButton.jpg');
});

app.get('/ButtonIcons/expences-button-png-hi.png', function(req, res) {
    res.sendFile(__dirname + '/ButtonIcons/expences-button-png-hi.png');
});

app.get('/ButtonIcons/howToButton.jpg', function(req, res) {
    res.sendFile(__dirname + '/ButtonIcons/howToButton.jpg');
});

app.get('/ButtonIcons/KINECTAGRAPH_ICON.png', function(req, res) {
    res.sendFile(__dirname + '/ButtonIcons/KINECTAGRAPH_ICON.png');
});

app.get('/ButtonIcons/parabolaButton.jpg', function(req, res) {
    res.sendFile(__dirname + '/ButtonIcons/parabolaButton.jpg');
});

app.get('/drawing.html', function(req, res) {
    res.sendFile(__dirname + '/drawing.html');
});

kinect.on('bodyFrame', function(bodyFrame){
    io.sockets.emit('bodyFrame', bodyFrame);
});

kinect.openBodyReader();



}