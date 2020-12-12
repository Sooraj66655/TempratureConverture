

/********************************************Conversion Function************************************************/

function ConvertData() {
	var temp = document.getElementById("number").value;
	var unit = document.getElementById("selectunit").value;
	if (temp != '') {
	if (unit == "Farenheit") {
		temp = document.getElementById("number").value * 9 / 5 + 32;
		document.getElementById("display").value = temp +"\u2109";
	} else if (unit == "Celcius") {
		temp = (document.getElementById("number").value - 32) * 5 / 9;
		document.getElementById("display").value = temp +"\u2103";
	}
}
else{
	document.getElementById("display").value = "Please! Enter value....";
}
}

/*********************************************Conversion Function End*****************************************/