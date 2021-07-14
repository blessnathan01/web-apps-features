var myAudio = document.getElementById("myAudio");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(myAudio.paused) {
        myAudio.play();
        icon.src = "images/pause.png";
    } else {
        myAudio.pause();
        icon.src = "images/play1.png";
    }
}