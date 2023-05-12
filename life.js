const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')
let Header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});
window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > 200) { 
        Header.classList.add('fixed');
    } else {
        Header.classList.remove('fixed');
    }
});

