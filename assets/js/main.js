const clock = document.querySelector('.clock'); 
const buttonStart = document.querySelector('.start'); 
const buttonPause = document.querySelector('.pause'); 
const buttonRestart = document.querySelector('.restart'); 

let seconds = 0;

// Formating Time
function getTimeInSeconds(seconds) { 
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function startTheTimer() { 
    timer = setInterval(() => {
    seconds++;
    clock.innerHTML = getTimeInSeconds(seconds); 
}, 1000); 
}


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


// Using closure to take this variables in these functions

let timer;
// Using closure to take this variables in these functions






