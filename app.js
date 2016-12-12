(function(){

var app = angular.module('estevezisms', [ ]);

//funky DEPENDENCY INJECTION service syntax - see notes
app.controller('estevezController', ['$http', function($http){
	var jokes = this;
	//initialize to an empty array
	jokes.jokes = [];

	this.showPunchline = false;

	//store.products = [];
	$http.get('jokes.json').success(function(data){
		jokes.jokes = data;
		jokes.getJoke();
	});


	this.currentJoke = {};

	this.getJoke = function(){
		this.showPunchline = false;
		var numJokes = jokes.jokes.length;
		var randJoke = getRandomInt(0, numJokes);
		this.currentJoke = jokes.jokes[randJoke];
	};

	//init
	this.getJoke();
} ]);


})();

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}