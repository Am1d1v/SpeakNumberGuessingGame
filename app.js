


const msgEl = document.querySelector('#msg');
const randomNum = getRandomNumber();
console.log(randomNum);
    // Generate random number
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

    // Capture user speak
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    console.log(msg);

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
        msgEl.innerHTML = '<div>That is not a valid number</div>';
        return;
    }

    // Check in range
    if(num > 100 || num < 1){
        msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
        return;
    }

    // Check Number
    if(num === randomNum){
        document.body.innerHTML = `
        <h2>Congrats! You have guessed the number<h2>
        <br>
        It was ${num}
        <button class="play-again" id="play-again"> Play Again </button>
        `
    } else if(num > randomNum){
        msgEl.innerHTML += `<div>Number must be lower</div>`;
    } else {
        msgEl.innerHTML += `<div>Number must be higher</div>`;
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
recognition.addEventListener('result', onSpeak);

    // End SR Service
recognition.addEventListener('end', () => recognition.start());   

    // Paly Again
document.body.addEventListener('click', (e) => {
    if(e.target.id === 'play-again'){
        window.location.reload();
    }
    
})    