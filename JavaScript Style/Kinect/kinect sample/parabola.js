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

	//vars for display
	var msg;
	var transDisplayStr;
	var horzDisplayStr;
	var vertDisplayStr = "";
	//because formula uses x-horzShift instead of x+horzShift
	var horzShiftForDisplay = horzShift*-1

	//if transDisplay would be 1/1 display nothing
	if (Math.floor(transnum)==Math.floor(transdenom)) transDisplayStr = "";
	//if transDisplay would be transnum/1 just display transnum
	else if(Math.floor(transdenom)==1) transDisplayStr = Math.floor(transnum);
	//otherwise, display transnum/transdisplay
	else transDisplayStr = Math.floor(transnum) + "/" + Math.floor(transdenom);

	//if horzShift is 0 don't display it
	if (horzShiftForDisplay==0) horzDisplayStr = "x";
	// make sure + is used instead of --
	else if (horzShiftForDisplay > 0) horzDisplayStr = "(x + " + horzShiftForDisplay + ")";
	//make sure - is used instead of +-
	else horzDisplayStr = "(x - " + horzShift + ")";

	//if vertShift is 0 don't display it
	if (vertShift==0) vertDisplayStr = "";
	//make sure - is used instead of +-
	else if (vertShift < 0) vertDisplayStr = " - " + vertShift*-1;
	//otherwise display vertShift normally
	else vertDisplayStr = " + " + vertShift;

	msg = "y = " + transDisplayStr + horzDisplayStr + "^2" + vertDisplayStr;
	return msg;

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
