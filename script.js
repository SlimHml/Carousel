'use strict'

let items = document.querySelectorAll('li')
console.log(items);
let nextButton = document.getElementsByClassName('nextButton');
console.log(nextButton)
let previousButton = document.getElementsByClassName('previousButton')
console.log(previousButton);
let i = 0;

//La page est chargée avec la première LI (indexée 0) avec la classe Visible (dans le HTML), les deux autres sont invisibles.

function nextImage() {
    items[i].classList.remove("visible"); // Cette ligne va enlever la classe visibile de toutes les LI (sur pression du bouton)
    i++; // cette ligne permet de passer à l'index suivant de ma LI (1) puis (2)
    if (i == items.length) { // SI l'index est égal à la longueur maximum de ma liste de LI
    i = 0 // L'index repasse à (0)
    }
    items[i].classList.add("visible"); // Ajoute moi la classe visible à l'itération sur laquelle je viens de basculer
}

 function previousImage () {
    items[i].classList.remove("visible"); // Même chose que la première ligne de la fonction nextImage
    i--; // cette ligne permet de passer à l'index précédent l'index actuel
    if (i < 0) { // SI l'index descends en dessous de 0
    i = 2  // L'index passe à 2 (3 ème et dernière image de ce carousel)
    }
    items[i].classList.add("visible");// Ajoute moi la classe visible à l'itération sur laquelle je viens de basculer
}

nextButton[0].addEventListener("click", nextImage); //nextButton retourne une collection, je demande donc l'index 0, puis je lui applique un event

previousButton[0].addEventListener("click", previousImage); //previousButton retourne une collection, je demande l'index 0 etc etc