var textA = "Hi @nicola! Hope you are enjoying #code and #programming. It is really the best. #effort";


// create a function that accepts a string
// it should output an array of hashtags
// E.g. ["programming","code","effort"]

// create another function that can return an array of usernames
// E.g. ["nicola"]

// Test it by calling the functions and proving it works for these strings as well.

var textB = "These are three tags: #cat      #dog#mouse.";
var textC = "I'm loving it. #McDonalds,#BurgerKing, #my.life";

var tweets = [textA, textB, textC];



var expression = /\S*#\S+/gi;
var expressionA = textA.match(expression);
var expressionB = textB.match(expression);
var expressionC = textC.match(expression);

console.log(expressionA);


function getHashtags(str){
	var expression = /\S*#\S+/gi;	// var regEx = //gi;
	var hashtagAry = str.match(expression);

	hashtagAry.forEach(function(tagStr, i){
		console.log(tagStr, i);
		hashtagAry[i] = tagStr.replace('#','');
	});

	return hashtagAry;
}

getHashtags(textA);
getHashtags(textB);
getHashtags(textC);

getHashtags(tweets[2]);




//find the string



create a function that can take a F degree number and convert by returning to C.


function tempConvert(fDegree){
	var celsius = (fDegree - 32) * (5/9);
	return celsius;
}
