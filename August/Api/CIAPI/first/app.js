
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

const audioElement = document.getElementById("audio");
const play = document.getElementById("play");
const sound = document.getElementById("sound");

console.log(audioCtx)

