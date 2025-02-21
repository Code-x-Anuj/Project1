var Els = document.getElementById("btn");
var Els2 = document.getElementById("btn1");
var Els3 = document.getElementById("btn2");
var counter = document.getElementById("counter");

var intervalId;
var count  = function () {
	counter.textContent = parseFloat(counter.textContent) + 1;
}

var start = function (){
	intervalId = window.setInterval(count, 1000);
}

var stop = function() {
	window.clearInterval(intervalId);
}

var Restart = function(){
	counter.textContent = "0";
}

Els.addEventListener("click", start);
Els2.addEventListener("click", stop);
Els3.addEventListener("click", Restart);
