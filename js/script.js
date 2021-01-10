var addButton = document.getElementById("form__send--button");
var tempoDefinido = document.getElementById("form__time")
var nomeRelogio = document.getElementById("form__nome")
var containerClocks = document.getElementById("container__clocks");
var interval;

addButton.addEventListener("click", addClock)

function addClock() {

    var tempoDefinidoInterno = [tempoDefinido.value, tempoDefinido.valueAsNumber];
    var nomeRelogioInterno = nomeRelogio.value;

    if (tempoDefinidoInterno && nomeRelogioInterno.trim() != "") {
        adicionaClock(tempoDefinidoInterno, nomeRelogioInterno);
    }

    else {
        alert('Preencher os campos')
    }

};

function adicionaClock(tempoDefinidoInterno, nomeRelogioInterno) {

    // CRIA NOME DO RELOGIO

    var novoClock = document.createElement("div");
    novoClock.setAttribute("id", "clock");
    var nameClock = document.createElement("p")
    nameClock.setAttribute("id", "clock__name")
    var nameClockText = document.createTextNode(nomeRelogioInterno)
    nameClock.appendChild(nameClockText)
    novoClock.appendChild(nameClock)

    // CRIA TIMER DO RELOGIO

    var novoTimer = document.createElement("p");
    novoTimer.setAttribute("id", "clock__number");
    novoTimer.setAttribute("value", tempoDefinidoInterno[1]);
    var novoTimerText = document.createTextNode(tempoDefinidoInterno[0]);
    novoTimer.appendChild(novoTimerText);
    novoClock.appendChild(novoTimer);

    //CRIA BOTÃO DE PLAY

    var novoPlay = document.createElement("button");
    var novoIconePlay = document.createElement("i");
    novoPlay.setAttribute("class", "form__play");
    novoPlay.addEventListener("click", playCounter);
    novoIconePlay.setAttribute("class", "fas fa-play form__send__icon");
    novoPlay.appendChild(novoIconePlay);
    novoClock.appendChild(novoPlay);

    // CRIA BOTAO DE DELETE

    var novoDelete = document.createElement("button");
    var novoIconeDelete = document.createElement("i");
    novoDelete.setAttribute("class", "form__delete");
    novoIconeDelete.setAttribute("class", "fas fa-minus-square form__send__icon");
    novoDelete.appendChild(novoIconeDelete);
    novoClock.appendChild(novoDelete);



    // ADICIONA TUDO A NOVA DIV CONTAINER CLOCKS

    containerClocks.appendChild(novoClock);

};


// ESBOÇO DE TIMER

function playCounter(event) {


    // const countdown = document.getElementById("clock__number")
    const countdown = event.target.previousSibling
    const rawTime = countdown.getAttribute('value');
    var time = Math.floor(rawTime / 1000);
    function updateClockNumber() {

        let hours = Math.floor(time / 3600);
        hours = hours < 10 ? '0' + hours : hours
        let minutes = Math.floor((time % 3600) / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdown.innerHTML = `${hours}:${minutes}:${seconds}`;
        if (time <= 0) {
            clearInterval(interval)
            var audio = new Audio('./sound/alarmclockringing.mp3');
            audio.play();
        }
        else {
            time--;
            console.log(time)
        }

    }

    interval = setInterval(updateClockNumber, 1000)

};


containerClocks.addEventListener('click', deleteClock);
function deleteClock(event) {

    var isDeleteButton = event.target.classList.contains('form__delete')

    if (isDeleteButton === true && confirm('Tem certeza que deseja excluir este relógio?')) {
        const excluirClock = event.target
        clearInterval(interval)
        excluirClock.parentElement.remove()
        
    }

};


