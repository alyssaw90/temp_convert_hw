var tempConverter = function(fTemp) {
	return (fTemp - 32) * (5 / 9);
}
document.addEventListener("DOMContentLoaded", function() {
// alert("I've loaded!")
var button = document.getElementById("submit");

button.addEventListener('click', function() {
	// alert("temp")
	
	var temp = document.getElementById("fTemp").innerHTML
	var finalTemp = tempConverter(temp)
	console.log(finalTemp)
	document.querySelector("#cTemp").value = finalTemp;
});
})	

// var temp = document.getElementById("fTemp")
// var temp = parseInt(box.innerText);
// console.log(temp);



// function convertToF() {
// 	var cTempVal = parseFloat(document.getElementById('cTemp').value);
// 	var fTempVal = (cTempVal * (9/5)) + 32;
// 	console.log(fTempVal);
// 	document.getElementById('fTemp').value = fTempVal;
// 	return false;
// }


// tempC = (.tempF-32) * (5/9);
// tempC = tempC.toFixed(1);

// console.log(tempC + 'ºC is ' + .tempF + 'ºF');