import { categories, countries, animamls, fruits } from "./arrays.js";

function renderCategories(){
    const containerButtons = document.querySelector(".botoes");
    containerButtons.innerHTML = categories.map(category => {
        return  `<button class="botao" onclick="chooseCategory(this)">${category}</button>`
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
            console.log(element.textContent);
            break;
        
        case "animais":
            console.log(element.textContent);
            break;
        
        case "frutas":
            console.log(element.textContent);
            break;

        default:
            console.log("Categoria não encontrada");
    }
}