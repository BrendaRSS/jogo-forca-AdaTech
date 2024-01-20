import { categories, countries, animals, fruits } from "./arrays.js";

let drawnWord;
const correctLetters = [];
const wrongLetters = [];

function renderCategories() {
    const containerButtons = document.querySelector(".botoes");
    containerButtons.innerHTML = categories.map(category => {
        return `<button class="botao" >${category}</button>`
    }).join('');
    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(b => {
        b.addEventListener('click', () => chooseCategory(b))
    })
}

renderCategories();

function chooseCategory(element) {
    switch (element.textContent.toLowerCase()) {
        case "países":
            drawnWord = countries[Math.floor(Math.random() * countries.length)];
            break;

        case "animais":
            drawnWord = animals[Math.floor(Math.random() * countries.length)];
            break;

        case "frutas":
            drawnWord = fruits[Math.floor(Math.random() * countries.length)];
            break;

        default:
            console.log("Categoria não encontrada");
    }

    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(b => {
        b.disabled = true;
    });

    console.log(drawnWord);
    renderWord();
}

function renderWord() {
    const wordArray = drawnWord.split("");
    const divDrawnWord = document.querySelector(".palavra-sorteada");
    
    divDrawnWord.innerHTML = wordArray.map(letter => {
        if (correctLetters.includes(letter)) {
            return `<span>${letter}</span>`;
        } else {
            return `<span>__</span>`;
        }
    }).join('');
}

document.addEventListener('keydown', handleKeyPress);

// Ouvinte de evento para capturar os cliques nos botões do teclado
const keyboard = document.querySelector(".teclado");
keyboard.addEventListener('click', handleButtonClick);

function handleKeyPress(event) {
    const pressedKey = event.key.toLowerCase();

    // Verifica se a tecla pressionada é uma letra do alfabeto
    if (/^[a-z]$/.test(pressedKey)) {
        handleKey(pressedKey);
    }
}

function handleButtonClick(event) {
    // Verifica se o clique foi em um botão do teclado
    if (event.target.tagName === 'BUTTON') {
        const clickedKey = event.target.id.toLowerCase();
        handleKey(clickedKey);
    }
}

function handleKey(key) {
    // Desativa a tecla no teclado
    disableKey(key);

    // Verifica se a letra está correta ou errada
    if (drawnWord.includes(key)) {
        correctLetters.push(key);
    } else {
        wrongLetters.push(key);
    }

    // Atualiza a exibição da palavra sorteada
    renderWord();

    // Verifica se o usuário ganhou ou perdeu
    checkGameStatus();
}

function disableKey(key) {
    // Desativa a tecla no teclado
    const keyElement = document.getElementById(key);
    if (keyElement) {
        keyElement.disabled = true;
    }
}

function checkGameStatus() {
    // Lógica para verificar se o usuário ganhou ou perdeu
}

// OBS.: Toda vez que o usuário apertar uma letra aconceterá:
// 1: Letra ficará disable
// 2: verificar se a letra é certa ou errada
// 3: verificar se o usuário já ganhou ou perdeu