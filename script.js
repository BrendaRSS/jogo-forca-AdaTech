import { categories, countries, animamls, fruits } from "./arrays.js";

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
    });
}

renderCategories();

function chooseCategory(element) {
    switch (element.textContent.toLowerCase()) {
        case "países":
            drawnWord = countries[Math.floor(Math.random() * countries.length)];
            break;

        case "animais":
            drawnWord = animamls[Math.floor(Math.random() * animamls.length)];
            break;

        case "frutas":
            drawnWord = fruits[Math.floor(Math.random() * fruits.length)];
            break;

        default:
            console.log("Categoria não encontrada");
    }

    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(b => {
        b.disabled = true;
    });

    renderWord();
}

function renderWord() {
    const wordArray = drawnWord.split("");
    const divDrawnWord = document.querySelector(".palavra-sorteada");
    divDrawnWord.innerHTML = wordArray.map(l => {
        return `<span class="letra">${correctLetters.includes(l) ? l : "__"}</span>`;
    }).join('');

    // Disable already clicked letters
    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(button => {
        const letter = button.textContent.toLowerCase();
        button.disabled = correctLetters.includes(letter) || wrongLetters.includes(letter);
    });

    renderSelectedLetters();
}

function renderSelectedLetters() {
    const divSelectedLetters = document.querySelector(".letras-selecionadas");

    // Verifica se o elemento .letras-selecionadas existe antes de tentar manipulá-lo
    if (divSelectedLetters) {
        divSelectedLetters.innerHTML = `
            <p>Letras Selecionadas: ${correctLetters.join(', ')}</p>
            <p>Letras Erradas: ${wrongLetters.join(', ')}</p>
        `;
    }
}

    // Adiciona um event listener para cada botão de letra
    const buttons = document.querySelectorAll(".botao");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const letter = button.textContent.toLowerCase();
            handleLetter(letter);
        });
    });

function handleLetter(letter) {
    if (drawnWord.includes(letter)) {
        // Letra correta
        correctLetters.push(letter);
    } else {
        // Letra errada
        wrongLetters.push(letter);
    }

    // Atualiza a palavra exibida e desativa os botões
    renderWord();
}

    // Função para renderizar o teclado
function renderKeyboard() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const keyboardContainer = document.querySelector('.teclado');

    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.classList.add('botao-teclado');
        button.textContent = letter;
        button.addEventListener('click', () => handleLetter(letter));
        keyboardContainer.appendChild(button);
    });
}

    // Função para renderizar o teclado apenas se o elemento .teclado existir
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.teclado')) {
        renderKeyboard();
    }
});

// OBS.: Toda vez que o usuário apertar uma letra aconceterá:
// 1: Letra ficará disable
// 2: verificar se a letra é certa ou errada
// 3: verificar se o usuário já ganhou ou perdeu