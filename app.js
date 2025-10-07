const saudacao = document.getElementById('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const frasesManha = [
    "Tenha um bom dia.",
    "A chance de um novo começo está aqui"
];
const frasesTarde = [
    "Tenha uma boa tarde.",
    "Respire fundo e siga em frente"
];
const frasesNoite = [
    "Tenha uma boa noite.",
    "Deixe ir o que não pode controlar"
];

function atualizaSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();
    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
    if(hora >= 5 && hora < 12) {
        msgSaudacao = 'Bom dia';
        imgFundo = "url(fundo.png)";
        imgIcone = "iconedia.png";
        frasesDoMomento = frasesManha;
    } else if (hora >= 12 && hora < 18) {
        msgSaudacao = 'Boa tarde';
        imgFundo = "url(fundotarde.png)";
        imgIcone = "iconetarde.png";
        frasesDoMomento = frasesTarde;
    } else {
        msgSaudacao = 'Boa noite';
        imgFundo = "url(fundonoite.png)";
        imgIcone = "iconenoite.png";
        frasesDoMomento = frasesNoite;
    }
    saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone;
    const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
    frase.textContent = frasesDoMomento [randomIndex];
}
atualizaSaudacao();
setInterval(atualizaSaudacao, 8000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}