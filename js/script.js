var addButton = document.getElementById("form__send--button");
var tempoDefinido = document.getElementById("form__time")
var nomeRelogio = document.getElementById("form__nome")
var containerClocks = document.getElementById("container__clocks");

addButton.addEventListener("click", addClock)

function addClock(){

    var tempoDefinidoInterno = tempoDefinido.value;
    var nomeRelogioInterno = nomeRelogio.value;
    adicionaClock(tempoDefinidoInterno, nomeRelogioInterno);
    
};

function adicionaClock(tempoDefinidoInterno, nomeRelogioInterno){

// CRIA NOME DO RELOGIO

    var novoClock = document.createElement("div");
    novoClock.setAttribute("id", "clock");
    var nameClock = document.createElement("p")
    nameClock.setAttribute("id", "clock__name")
    var nameClockText = document.createTextNode(nomeRelogioInterno)
    nameClock.appendChild(nameClockText)
    novoClock.appendChild(nameClock)

// CRIA TIMER DO RELOGIO

    var novoTimer = document.createElement("p")
    novoTimer.setAttribute("id", "clock__number")
    var novoTimerText = document.createTextNode(tempoDefinidoInterno)
    novoTimer.appendChild(novoTimerText)
    novoClock.appendChild(novoTimer)

//CRIA BOTÃO DE PLAY

    var novoPlay = document.createElement("button")
    var novoIconePlay = document.createElement("i")
    novoPlay.setAttribute("id", "form__play")
    novoPlay.addEventListener("click", playCounter)
    novoIconePlay.setAttribute("class", "fas fa-play form__send__icon")
    novoPlay.appendChild(novoIconePlay)
    novoClock.appendChild(novoPlay)

 // CRIA BOTAO DE DELETE
 
    var novoDelete = document.createElement("button");
    var novoIconeDelete = document.createElement("i");
    novoDelete.setAttribute("id", "form__delete");
    novoDelete.addEventListener("click", removeClock)
    novoIconeDelete.setAttribute("class", "fas fa-minus-square form__send__icon");
    novoDelete.appendChild(novoIconeDelete);
    novoClock.appendChild(novoDelete);



// ADICIONA TUDO A NOVA DIV CONTAINER CLOCKS

    containerClocks.appendChild(novoClock);

        
};


// ESBOÇO DE TIMER

function playCounter(){

var countdown = document.getElementById("clock__number")
var minutes = countdown.valueAsNumber;
var time = Math.floor(minutes / 1000);
setInterval(updateClockNumber(time, countdown), 1000)

}


function updateClockNumber(time, countdown){

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;

}

function removeClock(){



}

