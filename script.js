const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

}, 1000);

// Função para exibir a data atual

function toggleSom() {
    const audio = document.getElementById('audioFundo');
    const botao = document.getElementById('btnSom');

    if (audio.muted || audio.paused) {
        audio.muted = false;
        audio.play();
        botao.textContent = '🔊';
    } else {
        audio.pause();
        botao.textContent = '🔇';
    }
}
