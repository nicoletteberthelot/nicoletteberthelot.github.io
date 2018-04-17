function add10 () {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out + 10);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}

function add20() {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out + 20);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}	

function add30() {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out + 30);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}
function subtract10() {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out - 10);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}
function subtract20() {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out - 20);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}
function subtract30() {

	var out = document.querySelector ('#out').innerHTML;

	out = parseInt(out);

	var sum = (out - 30);

	document.querySelector ('#out').innerHTML = sum;

	console.log (sum);
}
function changeColorBlue () {

	var out = document.querySelector ('#out');

	out.style.backgroundColor="blue"

	console.log (out);
}
function changeColorRed () {

	var out = document.querySelector ('#out');

	out.style.backgroundColor="red"

	console.log (out);
}


var a10 = document.querySelector('#a10');
var a20 = document.querySelector('#a20');
var a30 = document.querySelector('#a30');
var n10 = document.querySelector ('#n10');
var n20 = document.querySelector ('#n20');
var n30 = document.querySelector ('#n30');
var blue = document.querySelector ('#blue');
var red = document.querySelector ('#red');


a10.onclick = add10;
a20.onclick = add20;
a30.onclick = add30;
n10.onclick = subtract10;
n20.onclick = subtract20;
n30.onclick = subtract30;
blue.onclick = changeColorBlue;
red.onclick = changeColorRed;



	
// var sum = (a10 + a20 + a30);

// function add () {
// 	
// 	var sum = document.querySelector ('#out').value;

// 	var a10 = 10;
// 	var a20 = 20;
// 	var a30 = 30;

// 	math.add(10); 

// 	document.querySelector('#out').innerHTML = sum;
  
// 	sum.onclick = add;
// }
