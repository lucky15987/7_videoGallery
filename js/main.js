var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

var closebtn = document.getElementById("close-btn");




function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file) {
    videoPlayer.src = file;
    videoPlayer.style.display = "block";
}

closebtn.addEventListener("click", stopVideo);

