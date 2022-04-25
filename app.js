
const hamburger = document.querySelector('.hamburgerMenu');
const ul = document.querySelector('.headerLinks');

hamburger.addEventListener("click", () => {
    ul.classList.toggle('showMe');
})