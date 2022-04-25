
const hamburger = document.querySelector('.hamburgerMenu');
const ul = document.querySelector('.headerMenu');

hamburger.addEventListener("click", () => {
    ul.classList.toggle('showMe');
})

document.querySelectorAll('.headerLink').forEach(link => link.addEventListener('click', () => {
    ul.classList.remove("showMe");
}))