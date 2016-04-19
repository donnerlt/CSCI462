var message;
var rise=1;
var run=1;
function fun1(x) {return (((rise/run*x + trans) + trans2));}

function getFormula(){
	if (rise == 1 && run == 1 && trans2 == 0 && trans == 0) msg = "y = x";
	else if (run == 1 && trans2 == 0) msg = "y = " + rise.toFixed(2) + "x + " + trans;
	else if (trans2 == 0) msg = "y = " + rise.toFixed(2) + "/" + run.toFixed(2) + "x + " + trans;
	else msg = "y = (" + rise.toFixed(2) + "/" + run.toFixed(2) + "x + " + trans + ") + " + trans2;
	//msg = "y = " + trans+"*"+ x +"+"+ trans2;
	console.log(msg);
	return msg;
}

//scales graph upward
function dilation(){
	rise+= xChange;
	run-= xChange;
}

//scales graph downward
function contraction(){
	run+= xChange;
	rise-= xChange;
}

//translates graph up.
function translateUp(){
	trans+=.5;
}


//translates graph left.
function translateLeft(){
	trans2+=.5;
}

//translates graph up.
function translateDown(){
	trans-=.5;
}

//translates graph up.
function translateRight(){
	trans2-=.5;
}