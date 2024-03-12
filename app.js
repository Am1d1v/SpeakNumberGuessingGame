


const msgEl = document.querySelector('#msg');
const randomNum = getRandomNumber();

    // Generate random number
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

    // Capture user speak
function onSpeak(e){
    const msg = e.results[0][0].transcript;

    // Write out what we speak
    writeMessage(msg);

    // Check that input data is a number
    checkNumber(msg)
}    

    // Check message againts number
function checkNumber(msg){
    // Convert to number
    const num = +msg;

    // Check if valid number
    if(Number.isNaN(num)){
        msgEl.innerHTML = '<div>That is not a valid number</div>'
    }
}    

    // Write what user speaks
function writeMessage(msg){
    msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
    `
};


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

    // Start Recognition and Game
recognition.start();

    // Speak Result
    recognition.addEventListener('result', onSpeak)