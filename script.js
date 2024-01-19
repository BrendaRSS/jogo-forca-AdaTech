import { categories, countries, animamls, fruits } from "./arrays.js";
let drawnWord;
const correctLetters = [];
const wrongLetters = [];

function renderCategories(){
    const containerButtons = document.querySelector(".botoes");
    containerButtons.innerHTML = categories.map(category => {
        return  `<button class="botao" >${category}</button>`
    }).join('');

    const buttons = document.querySelectorAll(".botao");
    buttons.forEach( b => {
        b.addEventListener('click', () => chooseCategory(b))
    })
}

renderCategories();

function chooseCategory(element){
    switch (element.textContent.toLowerCase()){
        case "países":
            drawnWord = countries[Math.floor(Math.random() * countries.length)];
            break;
        
        case "animais":
            drawnWord = animamls[Math.floor(Math.random() * countries.length)];
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

function renderWord(){
    const wordArray = drawnWord.split("");
    const divDrawnWord = document.querySelector(".palavra-sorteada");
    divDrawnWord.innerHTML = wordArray.map( l => {
        return `<span>__</span>`
    }).join('');
}

// OBS.: Toda vez que o usuário apertar uma letra aconceterá:
// 1: Letra ficará disable
// 2: verificar se a letra é certa ou errada
// 3: verificar se o usuário já ganhou ou perdeu
