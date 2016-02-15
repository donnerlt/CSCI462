var Kinect2 = require('kinect2');

var kinect = new Kinect2();
if(kinect.open()) {
    console.log("Kinect opened!");
kinect.on('bodyFrame', function(bodyFrame){
    for(var i = 0;  i < bodyFrame.bodies.length; i++) {
        if(bodyFrame.bodies[i].tracked) {
            console.log(bodyFrame.bodies[i]);
        }
    }
});

//request body frames
kinect.openBodyReader();

//close the kinect after 1 minute
setTimeout(function(){
    kinect.close();
    console.log("Kinect Closed");
}, 60000);
}
