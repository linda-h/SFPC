counter = 0;

function expand(){
	var a = document.getElementById("WhoWeAre");	
	if (counter%2 == 0) {
		a.style.display='block';
		// document.getElementById("button1").innerHTML = "Hide";
	} else {
		a.style.display='none';
		// document.getElementById("button1").innerHTML = "Who We Are...";
	}
counter+=1;
}

function expand1(){
	var a = document.getElementById("organizations");	
	if (counter%2 == 0) {
		a.style.display='block';
		// document.getElementById("button2").innerHTML = "Hide";
	} else {
		a.style.display='none';
		// document.getElementById("button2").innerHTML = "Organizations We Support";
	}	
counter+=1;
}

function expand2(){
	var a = document.getElementById("fundraiser");	
	if (counter%2 == 0) {
		a.style.display='block';
		// document.getElementById("button3").innerHTML = "Hide";
	} else {
		a.style.display='none';
		// document.getElementById("button3").innerHTML = "Fundraisers!";
	}
counter+=1;
}

function expand3(){
	var a = document.getElementById("journey");	
	if (counter%2 == 0) {
		a.style.display='block';
		// document.getElementById("button4").innerHTML = "Hide";
	} else {
		a.style.display='none';
		// document.getElementById("button4").innerHTML = "Our Journey";
	}	
counter+=1;
}

function expand4(){
	var a = document.getElementById("resources");	
	if (counter%2 == 0) {
		a.style.display='block';
		// document.getElementById("button5").innerHTML = "Hide";
	} else {
		a.style.display='none';
		// document.getElementById("button5").innerHTML = "Resources";
	}
counter+=1;
}