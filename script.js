import { categories } from "./arrays.js";

function renderCategories(){
    const containerButtons = document.querySelector(".botoes");
    containerButtons.innerHTML = categories.map(category => {
      return  `<button class="botao">${category}<button>`
    }).join('');
}

renderCategories();