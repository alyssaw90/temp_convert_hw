var tempConverter = function(fTemp) {
	return (fTemp - 32) * (5 / 9);
}
document.addEventListener("DOMContentLoaded", function() {
// alert("I've loaded!")
var button = document.getElementById("submit");
var resetButton = document.getElementById("reset");

button.addEventListener('click', function() {
	// alert("temp")
	
	var temp = document.getElementById("fTemp").value
	var finalTemp = tempConverter(temp)
	console.log(finalTemp)
	document.querySelector("#cTemp").value = finalTemp;
});

document.querySelector('#reset').addEventListener('click', function() {
	document.querySelector('#fTemp').value = ""
	document.querySelector('#cTemp').value = ""
});
})	


