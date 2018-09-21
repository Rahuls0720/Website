function hide() {
	var x = document.getElementById("text1");
	x.style.display = "none";
}

function show() {
	var x = document.getElementById("text1");
	x.style.display = "block";
}

function format() {
	var x = document.getElementById("text1");
	x.style.backgroundColor = "green";
	x.style.color = "red";
	x.style.fontSize = "20";
	x.style.textAlign = "center";
}

function reset() {
	var x = document.getElementById("text1");
	x.style.display = "block";
	x.style.backgroundColor = "white";
	x.style.color = "black";
	x.style.fontSize = "14";
	x.style.textAlign = "left";
}

function blog() {
	if (confirm("Do you think you can handle it???")) {
		window.location.href = "blog.html";
	}
}

function resume() {
	name = prompt ("Please enter your name and company: ", "Rahul Sharma, Redhat");
	window.location.href = "rsResume.pdf";
}