var x = "Ex";
var y = "Why";
y = x + y;    // -- Q1
//ExWhy


x = "Extra";

function doThing(a,b) {
	return a + b;
}

  y = doThing(x, y);  //-- Q2
// ExtraWhy

function someOther(foo, bar){
	return "Hi " + doThing(foo, bar) + ", welcome to MSTU5003.";
}

var z = someOther(x, y);    // --- Q3
//"Hi ExtraExtraExWhy, welcome to MSTU5003."



// console.log(z);   --- Q4
//Hi ExtraExtraExWhy, welcome to MSTU5003.

var n = doThing;     //-- Q5


function almostLastThing(callback){
	return callback;
}

var m = almostLastThing(n);  // ---Q6

var o = m("foo", "bar");     //---Q7

function lastThing(after, one, two){
	return after(one, two);
}

var p = lastThing(n, "ABC", "DEF");   //  ---Q8
