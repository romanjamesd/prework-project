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

while('true' === 'true') {
    toggleButtons(firstSongAudio);
    toggleButtons(secondSongAudio);
    toggleButtons(thirdSongAudio);
    toggleButtons(fourthSongAudio);
}

function toggleButtons(songNumAudio) {
    const pauseButton = document.querySelector(`${songNumAudio} ~ button.pause-button`);
    const playButton = document.querySelector(`${songNumAudio} ~ button.play-button`);
    while (songNumAudio.isPaused === 'true') {
        pauseButton.display = 'none';
    }
    while (songNumAudio.isPaused === 'false') {
        playButton.display = 'none';
    }
}
function playSong (songNumAudio) {
    songNumAudio.play();
}
function pauseSong (songNumAudio) {
    songNumAudio.pause();
}