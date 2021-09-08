/*Elements Selecting*/ 

const vidWrapper = document.querySelector('div.player');
const video=document.querySelector(".viewer");
const progress=document.querySelector(".progress");
const progressBar=document.querySelector(".progress_filled");
const playButton=document.querySelector(".toggle");
const volume=document.querySelector('.player__slider[name="volume"]');
const playBackrate=document.querySelector('.player__slider[name="playbackRate"]');
const videoSkip=document.querySelectorAll('.player__button[data-skip]');
const fullScreen=document.querySelector('.player_fullscreen');

/*Event Handling*/
var drag;
var grap;
video.addEventListener('click',videoControl);
progress.addEventListener('mouseover', function(){drag = true});
progress.addEventListener('mouseout', function(){drag = false; grap = false});
progress.addEventListener('mousedown', function(){grap = drag});
progress.addEventListener('mouseup', function(){grap = false});
progress.addEventListener('click', updateCurrentPos);
progress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

playButton.addEventListener('click',videoControl);
volume.addEventListener('change',volumeControl);
playBackrate.addEventListener('change',playbackControl);
videoSkip.forEach(control => control.addEventListener('click', forward));
fullScreen.addEventListener('click',gofullScreen);


/*Functions Calling */

var progression;
function videoControl(e){
  if (video.paused) {
    video.play();
    playButton.innerHTML = "❚ ❚";
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
  } else {
    video.pause();
    playButton.innerHTML = "►";
    clearInterval(progression);
  };
}

function volumeControl(){
  const vol=this.value;
  video.volume=vol;
}

function playbackControl(){
  const rate=this.value;
  video.playBackrate=rate;
}

function updateProgress() {
  var progress = video.currentTime / video.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}

function updateCurrentPos(e){
  //offset of the progress bar / video wrapper width
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  video.currentTime = newProgress * video.duration;
}

function forward(){
  var value = Number(this.dataset.skip);
  video.currentTime = video.currentTime + value;
}

function gofullScreen(){
  console.dir(video);
  if(video.webkitSupportsFullscreen){
    video.webkitEnterFullScreen();
  }
}











//const vidWrapper = document.querySelector('div.player');
//const myVid = vidWrapper.querySelector('video.player__video');

// controls
//const controlPlay = vidWrapper.querySelector('.player__button');
//const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
//const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
//const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
//const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
//const controlProgress = vidWrapper.querySelector('.progress');
//const progressBar = vidWrapper.querySelector('.progress__filled');

// events
//var drag;
//var grap;

// myVid.addEventListener('click', toggleVideo);
// controlPlay.addEventListener('click', toggleVideo);
// controlVol.addEventListener('change', updateVol);
// controlRate.addEventListener('change', updateRate);
// controlFullScreen.addEventListener('click', goFullScreen);
// controlSkip.forEach(control => control.addEventListener('click', forward));
// controlProgress.addEventListener('mouseover', function(){drag = true});
// controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
// controlProgress.addEventListener('mousedown', function(){grap = drag});
// controlProgress.addEventListener('mouseup', function(){grap = false});
// controlProgress.addEventListener('click', updateCurrentPos);
//controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

//var progression;

// functions
// function toggleVideo() {
//   if (myVid.paused) {
//     myVid.play();
//     controlPlay.innerHTML = "❚ ❚";
//     updateProgress();
//     progression = window.setInterval(updateProgress, 200);
//   } else {
//     myVid.pause();
//     controlPlay.innerHTML = "►";
//     clearInterval(progression);
//   };
// }
// function updateVol(){
//   var volume = this.value;
//   myVid.volume = volume;
// }
// function updateRate(){
//   var rate = this.value;
//   myVid.playbackRate = rate;
// }
// function goFullScreen(){
//   console.dir(myVid);
//   if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
// }
// function forward(){
//   var value = Number(this.dataset.skip);
//   myVid.currentTime = myVid.currentTime + value;
// }
// function updateProgress() {
//   var progress = myVid.currentTime / myVid.duration;
//   progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
// }
//function updateCurrentPos(e){
  // offset of the progress bar / video wrapper width
  // var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  // progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  // myVid.currentTime = newProgress * myVid.duration;
//}
