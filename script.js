//variables for elements
//photos for songs
let firstSongImage = document.getElementById('song1-pic');
let secondSongImage = document.getElementById('song2-pic');
let thirdSongImage = document.getElementById('song3-pic');
let fourthSongImage = document.getElementById('song4-pic');

//audio files
const firstSongAudio = document.getElementById('song1-audio');
const secondSongAudio = document.getElementById('song2-audio');
const thirdSongAudio = document.getElementById('song3-audio');
const fourthSongAudio = document.getElementById('song4-audio');

//play buttons
const play1 = document.getElementById('song1-play-button');
const play2 = document.getElementById('song2-play-button');
const play3 = document.getElementById('song3-play-button');
const play4 = document.getElementById('song4-play-button');

//pause buttons
const pause1 = document.getElementById('song1-pause-button');
const pause2 = document.getElementById('song2-pause-button');
const pause3 = document.getElementById('song3-play-button');
const pause4 = document.getElementById('song4-pause-button');


const audioFiles = [firstSongAudio, secondSongAudio, thirdSongAudio, fourthSongAudio];
let songImages = [firstSongImage, secondSongImage, thirdSongImage, fourthSongImage];

//eventListeners
/*document.addEventListener('mouseover', e =>  {
    console.log(e);
});*/

firstSongAudio.addEventListener('playing', function(e) {
    //console.log(e);
    
    if (e.type === "playing") {
        firstSongImage.style.backgroundColor = '#ff69b4';
    }
});

firstSongAudio.addEventListener


//functions
function playSong (songNumAudio) {
    songNumAudio.play();
}
function pauseSong (songNumAudio) {
    songNumAudio.pause();
}