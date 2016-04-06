var message;
var rise=1;
var run=1;
function fun1(x) {return (((rise/run*x) + trans2));}

function getFormula(){
	if (rise == 1 && run == 1 && trans2 == 0) msg = "y = x";
	else if (run == 1 && trans2 == 0) msg = "y = " + rise + "x";
	else if (trans2 == 0) msg = "y = " + rise + "/" + run + "x";
	else msg = "y = " + rise + "/" + run + "x + " + trans2;
	//msg = "y = " + trans+"*"+ x +"+"+ trans2;
	console.log(msg);
	return msg;
}

//scales graph upward
function dilation(){
	rise++;
	run--;
}

//scales graph downward
function contraction(){
	run++;
	rise--;
}
