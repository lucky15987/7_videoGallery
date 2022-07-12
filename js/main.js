var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

var closebtn = document.getElementById("close-btn");
var playbtn = document.getElementsByClassName("play-btn");



function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file) {   
    
    myVideo.src = file;
    videoPlayer.style.display = "block";    
}

closebtn.addEventListener("click", stopVideo);





