//variables 

var wins = 0;
var losses =0;
var guesses =10;
var currentguesses = [];
var randomLetter = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
var i = 0;
//alert("random char is: " + randomLetter);

document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();


	currentguesses[i] = letter;
	i++;

	document.getElementById("cg").innerHTML = currentguesses;
	
	if (letter === randomLetter) {
	   wins++;
	   document.getElementById("w").innerHTML = wins;
	   reset();
	}
	else {
		guesses--;
		document.getElementById("gl").innerHTML = guesses;
		if (guesses === 0){
			losses++;
			document.getElementById("l").innerHTML = losses;
			reset();
		}
	}	
}
//reset function 

function reset(){
	guesses = 10;
	i = 0;
	currentguesses = [];
	randomLetter = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
	//alert("random char is: " + randomLetter);
}






