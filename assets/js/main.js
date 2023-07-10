const clock = document.querySelector('.clock'); 
const buttonStart = document.querySelector('.start'); 
const buttonPause = document.querySelector('.pause'); 
const buttonRestart = document.querySelector('.restart'); 


function getTimeInSeconds(seconds) { // This function has the purpose of transform milliseconds in seconds
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startTheTimer() { // This function start the clock. 
    timer = setInterval(function() { // Set this method(setInterval) to a const.
    seconds++; // Incrementing the variable that salve the value of seconds. 
    clock.innerHTML = getTimeInSeconds(seconds); // Adding in the HTML content the function that format milliseconds in seconds.
}, 1000); // Time that function will be executed.
}


// This way to code the same task is quicker and efficiant
document.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('start')) {
        clock.classList.remove('paused');
        clearInterval(timer);
        startTheTimer();
    }

    if (element.classList.contains('pause')) {
        clock.classList.add('paused');
        clearInterval(timer);    
    }

    if (element.classList.contains('restart')) {
        clock.classList.remove('paused');
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = `00:00:00`;
    }
})
// This way to code the same task is quicker and more efficient


// Using closure to take this variables in these functions
let seconds = 0;
let timer;
// Using closure to take this variables in these functions


// ----- THIS AREA ARE ANOTHER AND LARGER SOLUTION ------ 



// buttonStart.addEventListener('click', function(event) { // Starting the time
//     clock.classList.remove('paused');
//     clearInterval(timer);
//     startTheTimer();
// });

// buttonPause.addEventListener('click', function(event) {
//     clock.classList.add('paused');
//     clearInterval(timer);
// });

// buttonRestart.addEventListener('click', function(event) {
//     clock.classList.remove('paused');
//     clearInterval(timer);
//     seconds = 0;
//     clock.innerHTML = `00:00:00`;
// });

