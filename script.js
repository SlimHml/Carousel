'use strict'

let items = document.querySelectorAll('li')
console.log(items);
let nextButton = document.getElementsByClassName('nextButton');
console.log(nextButton)
let previousButton = document.getElementsByClassName('previousButton')
console.log(previousButton);
let i = 0;

function nextImage() {
    items[i].classList.remove("visible");
    i++; 
    if (i == items.length) {
    i = 0
    }
    items[i].classList.add("visible");
}

 function previousImage () {
    items[i].classList.remove("visible");
    i--;
    if (i < 0) { 
    i = 2
    }
    items[i].classList.add("visible");
}

nextButton[0].addEventListener("click", nextImage);

previousButton[0].addEventListener("click", previousImage);