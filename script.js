//variables for elements
let firstSongImage = document.getElementById('song1-pic');
let secondSongImage = document.getElementById('song2-pic');
let thirdSongImage = document.getElementById('song3-pic');
let fourthSongImage = document.getElementById('song4-pic');

const firstSongAudio = document.getElementById('song1-audio');
const secondSongAudio = document.getElementById('song2-audio');
const thirdSongAudio = document.getElementById('song3-audio');
const fourthSongAudio = document.getElementById('song4-audio');

const audioFiles = [firstSongAudio, secondSongAudio, thirdSongAudio, fourthSongAudio];
let songImages = [firstSongImage, secondSongImage, thirdSongImage, fourthSongImage];

/*document.addEventListener("click", function(event){
    if (event.target === '<button type="button" class="play-button" id="song1-play-button">PLAY</button>') {
        firstSongAudio.play();
    }
    else if (event.target === 'button#song2-play-button.play-button') {
        secondSongAudio.play();
    }
    else if (event.target === 'button#song3-play-button.play-button') {
        thirdSongAudio.play();
    }
    else if (event.target === 'button#song4-play-button.play-button') {
        fourthSongAudio.play();
    }
    console.log(event.target);
});*/

function playSong (songNumAudio) {
    songNumAudio.play();
}
function pauseSong (songNumAudio) {
    songNumAudio.pause();
}

//document.addEventListener('click', function (event) {
    //playSong(document.querySelector(`${event.target} ~ audio`));
//});