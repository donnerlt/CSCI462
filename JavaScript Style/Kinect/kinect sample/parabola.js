var msg;
function fun1(x) {return (transnum/transdenom*Math.pow((x),2) + trans2);}

function getFormula(){
if (transnum/transdenom == 1 && trans2 == 0) {msg = "y = x^2";
console.log(msg);}
else if (transnum/transdenom == 1) {msg = "y = x^2 + " + trans2;
console.log(msg)}
else if (trans2 == 0) {msg = "y = " + transnum/transdenom + "x^2";
console.log(msg);}
else{msg = "y = " + transnum/transdenom + "x^2 + " + trans2;
console.log(msg);}
return msg;
}

//scales graph upward
function dilation(){
	transnum++;
	transdenom--;
}

//scales graph downward
function contraction(){
	transdenom++;
	transnum--;
}