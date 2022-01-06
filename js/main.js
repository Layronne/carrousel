const items = document.querySelectorAll( 'img' );
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivant() {
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    console.log(count);
}
suivant.addEventListener('click', slideSuivant)

function slidePrecedent() {
    items[count].classList.remove('active');
    
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedent)

function keyPress(e) {
    if(e.keyCode === 37){
        slidePrecedent();
    } else if (e.keyCode === 39){
        slideSuivant()
    }
}
document.addEventListener('keydown', keyPress)
