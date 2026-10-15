//Nome falado de cada marca 
const sons = {
    "marca-chevrolet": new Audio("audio/chevrolet.mp3"),
    "marca-vw": new Audio("audio/vw.mp3"),
    "marca-fiat": new Audio("audio/fiat.mp3"),
    "marca-toyota": new Audio("audio/toyota.mp3"),
    "marca-citroen": new Audio("audio/citroen.mp3"),
    "marca-renault": new Audio("audio/renault.mp3")
};

let tocando = null;
let somLigado = true; // controla se o som está ativo

function pararTodos() {
    for (const classe in sons) {
        sons[classe].pause();
        sons[classe].currentTime = 0;
    }
    tocando = null;
}


// NOVO: botão de ligar/desligar o som
document.getElementById("btn-som").addEventListener("click", function () {
    somLigado = !somLigado;
    this.textContent = somLigado ? "🔊 Som: ligado" : "🔇 Som: desligado";
    if (!somLigado && tocando) {          // se desligar, para o áudio atual
        tocando.pause();
        tocando.currentTime = 0;
    }
});

document.querySelectorAll("tbody tr").forEach(linha => {
    linha.addEventListener("mouseenter", () => {
        if (!somLigado) return; // se o som estiver ligado não toca
        if (tocando) { tocando.pause(); tocando.currentTime = 0; }
        for (const classe in sons) {
            if (linha.classList.contains(classe)) {
                tocando = sons[classe];
                tocando.volume = 0.7;
                tocando.play().catch(() => { });
                break;
            }
        }
    });

    linha.addEventListener("mouseleave", () => {
        if (tocando) { tocando.pause(); tocando.currentTime = 0; }
    });
});

// Música ao clicar no background

const musica = new Audio("audio/musica.mp3");
musica.loop = true;       // repete quando terminar
musica.volume = 0.3;      // mais baixa que os nomes das marcas

document.addEventListener("click", function (e) {
    // Ignora cliques na tabela, no botão de som e no lightbox
    if (e.target.closest(".tabela-container, #btn-som, .lightbox")) return;

    if (musica.paused) {
        musica.play().catch(() => { });
    } else {
        musica.pause();
    }
});