
    const sons = {
    "cidade-saoluiz": new Audio("audio/saoluiz.mp3"),
    "cidade-saopaulo": new Audio("audio/saopaulo.mp3"),
    "cidade-belem": new Audio("audio/belem.mp3"),
    "cidade-taubate": new Audio("audio/taubate.mp3"),
    "cidade-garruchos": new Audio("audio/garruchos.mp3"),
    "cidade-caxiasdosul": new Audio("audio/caxiasdosul.mp3"),
    "cidade-pitangui" : new Audio ("audio/pitangui.mp3"),
    "cidade-valedosol": new Audio ("audio/valedosol.mp3"),
    "cidade-blumenau": new Audio ("audio/blumenau.mp3")
    };

    let tocando = null;
    let somLigado = true;

    function pararTodos() {
        for (const classe in sons) {
        sons[classe].pause();
    sons[classe].currentTime = 0;
        }
    tocando = null;
    }

    document.getElementById("btn-som").addEventListener("click", function () {
        somLigado = !somLigado;
    this.textContent = somLigado ? "🔊 Som: ligado" : "🔇 Som: desligado";
    if (!somLigado) pararTodos();
    });

    document.querySelectorAll("tbody tr").forEach(linha => {
        linha.addEventListener("mouseenter", () => {
            if (!somLigado) return;
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
            if (tocando) {tocando.pause(); tocando.currentTime = 0; }
        });
    });
