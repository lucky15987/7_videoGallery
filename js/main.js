var videoPlayer = document.getElementById("videoPlayer");
var vmyVideo = document.getElementById("myVideo");

var closebtn = document.getElementById("close-btn");



function stopVideo() {
    videoPlayer.style.display = "none";
}

closebtn.addEventListener("click", stopVideo);