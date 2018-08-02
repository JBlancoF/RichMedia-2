
window.onload = function() {
    document.getElementById("my_audio").play();
}

// function on(){
// var video = document.querySelector('#video')
//     video.pause()
// }
// document.querySelector('.close-popup').addEventListener('click', on,);

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'TL9XP9eP9Zk'
  });
}
    
  function pauseVideo() {
  player.pauseVideo();
}