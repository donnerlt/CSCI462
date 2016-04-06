var msg;
function fun1(x) {return (transnum/transdenom*Math.pow((x-horzShift),2) + vertShift);}

function getFormula(){
	if (transnum/transdenom == 1 && vertShift == 0 && horzShift == 0) {msg = "y = x^2";}
	else if (transnum/transdenom == 1 && horzShift == 0) {msg = "y = x^2 + " + vertShift;}
	else if (transdenom == 1 && vertShift == 0 && horzShift == 0) {msg = "y = " + Math.floor(transnum) + "x^2";}
	else if (vertShift == 0 && horzShift == 0) {msg = "y = " + Math.floor(transnum) + " / " + Math.floor(transdenom) + "x^2";}
	else if(horzShift == 0){msg = "y = " + Math.floor(transnum) + " / " + Math.floor(transdenom) + "x^2 + " + vertShift;}
	else if(vertShift == 0){msg = "y = " + Math.floor(transnum) + " / " + Math.floor(transdenom) + "(x +(" + horzShift*-1 + "))^2";}
	else {msg = "y = " + Math.floor(transnum) + " / " + Math.floor(transdenom) + "(x +(" + horzShift*-1 + "))^2 + " + vertShift;}
	console.log(msg);
}

//scales graph upward
function dilation(){
	transdenom+= xChange;
	
}

//scales graph downward
function contraction(){
	transnum+= xChange;
	
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
