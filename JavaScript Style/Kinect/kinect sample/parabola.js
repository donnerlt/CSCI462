var msg;
function fun1(x) {return (transnum/transdenom*Math.pow((x-horzShift),2) + vertShift);}

function getFormula(){
/*if (transnum/transdenom == 1 && vertShift == 0) {msg = "y = x^2";
console.log(msg);}
else if (transnum/transdenom == 1) {msg = "y = x^2 + " + vertShift;
console.log(msg)}
else if (vertShift == 0) {msg = "y = " + transnum/transdenom + "x^2";
console.log(msg);}
else{msg = "y = " + transnum/transdenom + "x^2 + " + vertShift;
console.log(msg);}*/
msg = "Y = " + transnum + " / " + transdenom + "(X +(" + horzShift*-1 + "))^2 + (" + vertShift +")" ;  
return msg;
}

//scales graph upward
function dilation(){
	transdenom++;
	
}

//scales graph downward
function contraction(){
	transnum++;
	
}

//translates graph up.
function translateUp(){
	vertShift+=.5;
}


//translates graph left.
function translateLeft(){
	horzShift+=.5;
}

//translates graph up.
function translateDown(){
	vertShift-=.5;
}

//translates graph up.
function translateRight(){
	horzShift-=.5;
}