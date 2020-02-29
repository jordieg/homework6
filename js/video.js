var video;

function getVid(){
	video = document.querySelector("#myVideo");
	return video;
}

function playVid() {
	x = getVid();
	x.play();
	document.getElementById("volume").innerHTML = x.volume * 100;
	console.log("Play Video");
}

function pauseVid() {
	x = getVid();
	x.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
		x = getVid();
		x.playbackRate *= .8;
  	console.log("Speed is "+ x.playbackRate);
}

function increaseSpeed() {
	x = getVid();
	x.playbackRate *= 1.25;
	console.log("Speed is "+ x.playbackRate);
}

function skipAhead() {
	x = getVid();

	// Move video currentTime 60 seconds
	x.currentTime += 60;
	if (x.ended) {
		newTime = 0;
		x.currentTime = 0;
		x.playbackRate = 1;
		x.pause();
	}
	console.log("Current location is "+ x.currentTime);
}

function mute() {
	x = getVid();
	if (x.muted){
		x.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		x.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
}

function changeVolume() {
	x = getVid();
	var slider = document.getElementById("volumeSlider").value;
	x.volume = slider/100;
	document.getElementById("volume").innerHTML = slider;
	console.log("Volume is " + slider);
}


function gray() {
	x = getVid();
	x.classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	x = getVid();
	x.classList.remove("grayscale");
	console.log("In color")
}
