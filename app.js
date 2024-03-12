


const msgEl = document.querySelector('#msg');
const randomNum = getRandomNumber();

    // Generate random number
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

    // Capture user speak
function onSpeak(e){
    const msg = e.results[0][0].transcript;
}    

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

    // Start Recognition and Game
recognition.start();

    // Speak Result
    recognition.addEventListener('result', onSpeak)