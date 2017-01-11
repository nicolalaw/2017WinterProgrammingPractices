// console.log($('#myID'));
//
// var codeToRun = function(){
// 	console.log($('#myID'));
// };
//
// $(document).ready(codeToRun);
// $(document).on('DOMContentLoaded', function(){
//   alert('DOMContentLoaded');
// });

// SELECTING
$('#myID');
document.getElementById('myID');
document.querySelector('#myID');

$('li');
document.querySelectorAll('li');

$('.odds');
document.querySelectorAll('.odds');

// MULTIPLE WAYS TO SELECT SAME THING
// https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
$('#myID');
$('div');
$('body > div');
$('[id="myID"]');
$('body div:first-child');
$('div + ul');




// Class adding and removing
$('#animals > div').addClass('animal');
document.querySelectorAll('#animals > div').forEach(function(el){
	el.classList.add('animal');
});

	// We can create our own shortcut functions
	function addClassToEl(selector, className){
		document.querySelectorAll(selector).forEach(function(el){
			el.classList.add(className);
		});
	}

$('#animals > div').removeClass('animal');
document.querySelectorAll('#animals > div').forEach(function(el){
	el.classList.remove('animal');
});

$('div:first').attr('id','myXXX');
document.querySelector('body > div:first-child').id = 'myXXX';


// ADDING and REMOVING and MOVING elements

// $('#junk').remove();
//
// var element = document.querySelector('#junk');
// document.querySelector('body').removeChild('#junk');
//
// $('#junk').appendTo('#animals');
// document.querySelector('#animals').appendChild(element);


// CREATE elements

var myEl = document.createElement("IMG");


// TRAVERSING
$('#monkey').parent(); // Gets parent
$('#monkey').children(); // Gets children
$('#monkey').closest('div'); // Finds closest parent div

var el = document.querySelector('#monkey');
el.parentElement;
el.children;
el.closest('div');



// Events
// $('span').click(function(event) {
// 	console.log(event);
// 	event.currentTarget.remove();
// });

// Event delegation
$('#fruits').click(function(event){
	// Event is the object about the event
	// currentTarget is the element that has the listener
	// target is the element that was actually triggered
	console.log(event, event.currentTarget, event.target);
	if (event.target.nodeName === "SPAN") {
		console.log(event);
	}
});
