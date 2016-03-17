var message;
var rise=1;
var run=1;
function fun1(x) {return (((rise/run*x) + trans2));}

function getFormula(){
msg = "y = " + trans+"*"+ x +"+"+ trans2;
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