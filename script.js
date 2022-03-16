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
const pause3 = document.getElementById('song3-pause-button');
const pause4 = document.getElementById('song4-pause-button');


const audioFiles = [firstSongAudio, secondSongAudio, thirdSongAudio, fourthSongAudio];
let songImages = [firstSongImage, secondSongImage, thirdSongImage, fourthSongImage];

//eventListeners
/*document.addEventListener('mouseover', e =>  {
    console.log(e);
});*/

//changes color if song has been started and reverts when finished
/*firstSongAudio.addEventListener('playing', function(e) {
    //console.log(e);
    
    if (e.type === "playing") {
        firstSongImage.style.backgroundColor = '#ff69b4';
    }
    else if (firstSongAudio.currentTime === '112') {
        firstSongImage.style.backgroundColor = '#00ffff';
    }
});

secondSongAudio.addEventListener('playing', function(e) { 
    if (e.type === "playing") {
        secondSongImage.style.backgroundColor = '#ff69b4';
    }
    else if (secondSongAudio.currentTime === '119.435941') {
        secondSongImage.style.backgroundColor = '#00ffff';
    }
});

thirdSongAudio.addEventListener('playing', function(e) {
    if (e.type === "playing") {
        thirdSongImage.style.backgroundColor = '#00ffff';
    }
    else if (thirdSongAudio.currentTime === '144.0653') {
        thirdSongImage.style.backgroundColor = '#ff69b4';
    }
});

fourthSongAudio.addEventListener('playing', function(e) {
    if (e.type === "playing") {
        fourthSongImage.style.backgroundColor = '#00ffff';
    }
    else if (fourthSongAudio.currentTime === '133.565238') {
        fourthSongImage.style.backgroundColor = '#ff69b4';
    }
});*/

//play and pause buttons
play1.addEventListener('click', function() {
    checkStatusOfSongs();
    firstSongAudio.play();
    firstSongImage.style.backgroundColor = '#ff69b4';
});
pause1.addEventListener('click', function () {
    firstSongAudio.pause();
    firstSongAudio.currentTime = '0';
});

play2.addEventListener('click', function() {
    checkStatusOfSongs();
    secondSongAudio.play();
    secondSongImage.style.backgroundColor = '#ff69b4';
});
pause2.addEventListener('click', function () {
    secondSongAudio.pause();
    secondSongAudio.currentTime = '0';
});

play3.addEventListener('click', function() {
    checkStatusOfSongs();
    thirdSongAudio.play();
    thirdSongImage.style.backgroundColor = '#00ffff';
});
pause3.addEventListener('click', function () {
    thirdSongAudio.pause();
    thirdSongAudio.currentTime = '0';
});

play4.addEventListener('click', function() {
    checkStatusOfSongs();
    fourthSongAudio.play();
    fourthSongImage.style.backgroundColor = '#00ffff';
});
pause4.addEventListener('click', function () {
    fourthSongAudio.pause();
    fourthSongAudio.currentTime = '0';
});




//functions
function playSong (songNumAudio) {
    songNumAudio.play();
}
function pauseSong (songNumAudio) {
    songNumAudio.pause();
}
function checkStatusOfSongs () {
    for (let i = 0; i < audioFiles.length; i++) {
        if (audioFiles[i].paused == false) {
            audioFiles[i].pause();
        }
    }
}